export default function(operationName) {
  const operationError = new Error(`Failed during transaction ${operationName}`);
  operationError.operation = { name: operationName };
  return operationError;
}
