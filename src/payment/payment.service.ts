import createOperation from "../support/createOperation";
import getOperationsSuite from "../support/getOperationsSuite";

async function postPayment(transactionID: string) {
  return await { message: true, transaction: { id: transactionID } };
}

async function deletePayment(transactionID: string) {
  return await { message: true, transaction: { id: transactionID } };
}

const operationSuites = {
  createPayment: {
    name: "createPayment",
    execute: createOperation("createPayment", postPayment),
    rollback: createOperation("createPayment", deletePayment),
  },
};

export const createPayment = getOperationsSuite("createPayment", operationSuites);
