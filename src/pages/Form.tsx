import { useEffect, useState } from "react";
import { Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import { usePersonalityForm } from "../model/context";
import { FormValues } from "../model/types";
import FormQuestion from "../components/FormQuestion";
import FormControls from "../components/FormControls";

const Form = () => {
  const { questions, answers, numQuestions, loading, submitAnswers } =
    usePersonalityForm();

  const [questionNum, setQuestionNum] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>(answers ?? []);

  useEffect(() => {
    submitAnswers(formValues);
  }, [questionNum]);

  if (loading) {
    return <Spinner />;
  }

  if (!questions) {
    return <Heading>Something went wrong</Heading>;
  }

  return (
    <Container p="0">
      <Heading size="lg" color="brand.600" mb="4">
        Question {questionNum + 1} of {numQuestions}
      </Heading>
      <Flex direction="column" bg="brand.200" p="10">
        <FormQuestion
          value={formValues[questionNum] || -1}
          question={questions[questionNum]}
          onChange={(v) =>
            setFormValues({
              ...formValues,
              [questionNum]: v,
            })
          }
        />
        <FormControls
          onPrev={
            questionNum > 0 ? () => setQuestionNum(questionNum - 1) : undefined
          }
          onNext={
            questionNum < numQuestions - 1
              ? () => setQuestionNum(questionNum + 1)
              : undefined
          }
          onSubmit={
            questionNum === numQuestions - 1
              ? () => submitAnswers(formValues, true)
              : undefined
          }
        />
      </Flex>
    </Container>
  );
};

export default Form;
