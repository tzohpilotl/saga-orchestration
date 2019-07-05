import getOperationsSuite from "../support/getOperationsSuite";
import createOperation from "../support/createOperation";

async function postPayment(transactionID) {
  return await { message: true, transaction: { id: transactionID } };
}

async function deletePayment(transactionID) {
  return await { message: true, transaction: { id: transactionID } };
}

const operationSuites = {
  "createPayment": {
    name: "createPayment",
    execute: createOperation("createPayment", postPayment),
    rollback: createOperation("createPayment", deletePayment),
  },
};

export const createPayment = getOperationsSuite("createPayment", operationSuites);
