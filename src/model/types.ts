export interface Question {
  question: string;
  answers: string[];
}

export interface ApiResults {
  numQuestions: number;
  questions: Question[];
}

export interface FormValues {
  [questionNum: number]: string;
}
