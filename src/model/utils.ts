import { FormValues } from "./types";

export const calculateResults = (results: FormValues) => {
  const highest: string = Object.values(results).reduce((a, b, i, arr) => {
    const countA = arr.filter((v) => v === a).length;
    const countB = arr.filter((v) => v === b).length;
    return countA >= countB ? a : b;
  }, null);

  return highest;
};
