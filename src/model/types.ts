export interface Question {
  question: string;
  answers: string[];
}

export interface ResultType {
  title: string;
  description: string;
}

export interface ResultTypes {
  [key: string]: ResultType;
}

export interface DataType {
  questions: Question[];
  results: ResultTypes;
}

export interface FormValues {
  [questionNum: number]: string;
}
