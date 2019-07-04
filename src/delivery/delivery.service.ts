import createOperation from "../support/createOperation";
import getOperationsSuite from "../support/getOperationsSuite";

async function postDelivery(transactionID: string) {
  return await {message: true, transaction: {id: transactionID}};
}

async function deleteDelivery(transactionID: string) {
  return await {message: true, transaction: {id: transactionID}};
}

const operationSuites = {
  createDelivery: {
    name: "createDelivery",
    execute: createOperation("createDelivery", postDelivery),
    rollback: createOperation("createDelivery", deleteDelivery),
  },
};

export const createDelivery = getOperationsSuite("createDelivery",
                                                 operationSuites);
