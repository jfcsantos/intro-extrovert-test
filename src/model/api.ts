import JSONfile from "./data.json";
import { ApiResults } from "./types";

// ? pass number of questions to retrieve
export const getFormQuestions = async () => {
  const loadedData = JSON.stringify(JSONfile);
  const parsed: ApiResults = JSON.parse(loadedData);
  return parsed;
};
