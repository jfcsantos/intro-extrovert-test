import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "wouter";
import { getFormQuestions } from "./api";
import { ApiResults, FormValues, Question } from "./types";

enum ResultMapping {
  A = "Introvert",
  B = "Extrovert",
  C = "Extroverted introvert",
  D = "Introverted extrovert",
}

export const calculateResults = (results: FormValues) => {
  const highest: keyof typeof ResultMapping = Object.values(results).reduce(
    (a, b, i, arr) => {
      const countA = arr.filter((v) => v === a).length;
      const countB = arr.filter((v) => v === b).length;
      return countA >= countB ? a : b;
    },
    null
  );

  return ResultMapping[highest];
};

export const useFormData = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>();
  const [numQuestions, setNumQuestions] = useState<number>(0);
  const [answers, setAnswers] = useState<FormValues | null>(null);
  const [finalResults, setResults] = useState("");
  const [location, setLocation] = useLocation();

  const submitAnswers = useCallback(
    (answers: FormValues, isSubmit = false) => {
      localStorage.setItem("formAnswers", JSON.stringify(answers));
      setAnswers(answers);
      if (isSubmit) {
        const res = calculateResults(answers);
        setResults(res);
      }
    },
    [answers]
  );

  useEffect(() => {
    if (finalResults) {
      setLocation("/results");
    }
  }, [finalResults]);

  useEffect(() => {
    getFormQuestions().then((res) => {
      setNumQuestions(res.numQuestions);
      setQuestions(res.questions);
    });
    const previousAnswers = localStorage.getItem("formAnswers");
    if (previousAnswers) {
      const res = calculateResults(JSON.parse(previousAnswers));
      setResults(res);
      setAnswers(JSON.parse(previousAnswers));
    }
  }, [finalResults]);

  return {
    questions,
    numQuestions,
    answers,
    finalResults,
    loading,
    submitAnswers,
  };
};

export interface FormType {
  questions?: Question[];
  numQuestions: number;
  answers: FormValues | null;
  finalResults?: string;
  submitAnswers: (answers: FormValues, isSubmit?: boolean) => void;
}

type ProviderProps = {
  children: React.ReactNode;
};

export const FormContext = createContext<FormType>({
  questions: [],
  numQuestions: 0,
  answers: [],
  submitAnswers: ({}) => {},
});

export const ProvideFormData = ({ children }: ProviderProps) => {
  const data = useFormData();
  return (
    <FormContext.Provider value={{ ...data }}>{children}</FormContext.Provider>
  );
};

export const usePersonalityForm = () => useContext(FormContext);
