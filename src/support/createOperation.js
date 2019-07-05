import createOperationError from "./createOperationError";

export default function(operationName, executeSideEffect) {
  return async function () {
    try {
      return await executeSideEffect();
    } catch (error) {
      throw createOperationError(operationName);
    }
  };
}
