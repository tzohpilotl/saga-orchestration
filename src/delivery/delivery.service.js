import getOperationsSuite from "../support/getOperationsSuite";
import createOperation from "../support/createOperation";

async function postDelivery(transactionID) {
  return await { message: true, transaction: { id: transactionID } };
}

async function deleteDelivery(transactionID) {
  return await { message: true, transaction: { id: transactionID } };
}

const operationSuites = {
  "createDelivery": {
    name: "createDelivery",
    execute: createOperation("createDelivery", postDelivery),
    rollback: createOperation("createDelivery", deleteDelivery),
  },
};

export const createDelivery = getOperationsSuite("createDelivery", operationSuites);
