import createOperation from "./createOperation";
import {SideEffect} from "./createOperation";
import createOperationError from "./createOperationError";

const mockSideEffectError = new Error("Side effect failed");
const mockSideEffect = jest.fn(() => Promise.resolve("Could be anything"));
const mockFailSideEffect = jest.fn(async () => {
  await Promise.resolve();
  throw mockSideEffectError;
});

describe("is a high order function so", () => {
  let highOrderFunction: SideEffect;

  beforeAll(() => {
    highOrderFunction = createOperation("testOperation", mockSideEffect);
  });

  it("can be invoked", async () => {
    expect(await highOrderFunction()).toEqual("Could be anything");
  });
});

describe("when it's side effect succeeds", () => {
  let highOrderFunction: SideEffect;

  beforeAll(() => {
    highOrderFunction = createOperation("successfulOperation", mockSideEffect);
  });

  it("forwards the side effect's result", async () => {
    expect(await highOrderFunction()).toEqual("Could be anything");
  });
});

describe("when it's side effect fails", () => {
  let highOrderFunction: SideEffect;

  beforeAll(() => {
    highOrderFunction = createOperation("failOperation", mockFailSideEffect);
  });

  it("rejects with an operation error", () => {
    expect(highOrderFunction()).rejects.toEqual(
      createOperationError("failOperation", mockSideEffectError));
  });
});
