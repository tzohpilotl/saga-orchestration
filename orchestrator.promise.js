function getNeededRollbacks(failedOperationName, transaction) {
  const neededRollbacks = [];

  for (let i = 0; i < transaction.length; i++) {
    const operation = transaction[i];

    if (operation.name === failedOperationName) {
      neededRollbacks.push(operation.rollback);
      return neededRollbacks;
    }

    neededRollbacks.push(operation.rollback);
  }

  return neededRollbacks;
}

async function promiseMainOperationsRunnerImplementation(transaction) {
  try {
    const executors = transaction.map(operation => operation.execute());
    return await Promise.all(executors);
  } catch (error) {
    const transactionError = new Error(`Failed at transaction ${transaction.name}`);
    transactionError.operation = {...error.operation};
    transactionError.transaction = {name: transaction.name};
    throw transactionError;
  }
}

async function promiseRollbackOperationsRunnerImplementation(transactionName, transaction) {
  try {
    const rollbacks = getNeededRollbacks(transactionName, transaction);
    return await promiseMainOperationsRunnerImplementation(rollbacks);
  } catch (error) {
    console.error(error);
  }
}

function createTransactionRunner(mainOperationsRunner, rollbackOperationsRunner) {
  return async function (transaction) {
    try {
      return await mainOperationsRunner(transaction.operations);
    } catch (error) {
      await rollbackOperationsRunner(error.operation.name, transaction.operations);
    }
  };
}

export const performTransactionWithPromises = createTransactionRunner(
  promiseMainOperationsRunnerImplementation, promiseRollbackOperationsRunnerImplementation);

