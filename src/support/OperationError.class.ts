type OperationTrace = {
  name: string;
};

class OperationError extends Error {
  public operationTrace: OperationTrace;
  public reasonTrace: Error;

  constructor(message: string, operation: OperationTrace, reason: Error) {
    super(message);
    // TODO: AFAIK Error.captureStackTrace could be missing in the browser
    // @ts-ignore
    Error.captureStackTrace(this, OperationError);
    this.operationTrace = operation;
    this.reasonTrace = reason;
  }
}

export default OperationError;
