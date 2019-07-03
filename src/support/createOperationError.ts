import OperationError from "./OperationError.class";

export default function(operationName: string, reason: Error) {
  return new OperationError(
    `Failed during transaction ${operationName}`, {name: operationName},
    reason);
}
