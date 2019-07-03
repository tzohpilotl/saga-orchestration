import createOperationError from "./createOperationError";

export type SideEffect = (...args: any[]) => Promise<any>;

export default function(operationName: string, executeSideEffect: SideEffect) {
  return async function() {
    try {
      return await executeSideEffect();
    } catch (error) {
      throw createOperationError(operationName, error);
    }
  };
}
