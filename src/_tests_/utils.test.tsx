import { FormValues } from "../model/types";
import { calculateResults } from "../model/utils";

describe("calculateResults", () => {
  test("empty results resturns null", () => {
    expect(calculateResults({})).toBe(null);
  });

  test("Returns mostly answered value", () => {
    let testAnswers: FormValues = { 0: "A", 1: "B", 2: "C", 3: "D" };
    expect(calculateResults(testAnswers)).toBe("A");

    testAnswers = { 0: "A", 1: "A", 2: "C", 3: "D" };
    expect(calculateResults(testAnswers)).toBe("A");

    testAnswers = { 0: "A", 1: "B", 2: "B", 3: "D" };
    expect(calculateResults(testAnswers)).toBe("B");

    testAnswers = { 0: "D", 1: "A", 2: "B", 3: "D" };
    expect(calculateResults(testAnswers)).toBe("D");
  });
});
