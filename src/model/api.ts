import JSONfile from "./data.json";
import { DataType } from "./types";

export const getFormQuestions = async () => {
  const loadedData = JSON.stringify(JSONfile);
  const parsed: DataType = JSON.parse(loadedData);
  return parsed;
};
