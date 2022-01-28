import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "wouter";
import { getFormQuestions } from "./api";
import { DataType, FormValues, Question, ResultType } from "./types";
import { calculateResults } from "./utils";

const useFormData = () => {
  const [location, setLocation] = useLocation();

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<DataType>();

  const [answers, setAnswers] = useState<FormValues | null>(null);
  const [finalResults, setResults] = useState<ResultType>();

  const submitAnswers = useCallback(
    (answers: FormValues, isSubmit = false) => {
      setAnswers(answers);
      if (isSubmit && data?.results) {
        const res = calculateResults(answers);
        const resultData = data.results[res];
        localStorage.setItem("finalResults", JSON.stringify(resultData));
        setResults(resultData);
      }
    },
    [answers]
  );

  useEffect(() => {
    if (location === "/questions" && !!finalResults) {
      setLocation("/results");
    }
  }, [finalResults]);

  useEffect(() => {
    if (location !== "/results") {
      localStorage.removeItem("finalResults");
    }
  }, [data]);

  useEffect(() => {
    if (!data) {
      getFormQuestions().then((res) => {
        setData(res);
      });
    }
    if (location === "/results") {
      const storedResults = localStorage.getItem("finalResults");
      if (storedResults) {
        setResults(JSON.parse(storedResults));
      }
    }
    setLoading(false);
  }, []);

  return {
    questions: data?.questions,
    numQuestions: data?.questions?.length || 0,
    answers,
    finalResults,
    loading,
    submitAnswers,
  };
};

interface FormType {
  questions?: Question[];
  numQuestions: number;
  answers: FormValues | null;
  finalResults?: ResultType;
  loading: boolean;
  submitAnswers: (answers: FormValues, isSubmit?: boolean) => void;
}

type ProviderProps = {
  children: React.ReactNode;
};

const FormContext = createContext<FormType>({
  questions: [],
  numQuestions: 0,
  answers: [],
  loading: false,
  submitAnswers: () => {},
});

export const FormDataProvider = ({ children }: ProviderProps) => {
  const data = useFormData();
  return (
    <FormContext.Provider value={{ ...data }}>{children}</FormContext.Provider>
  );
};

export const usePersonalityForm = () => useContext(FormContext);
