import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Radio,
  RadioGroup,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { usePersonalityForm } from "../model/hooks";
import { FormValues } from "../model/types";

const Form = () => {
  const { questions, numQuestions, answers, submitAnswers } =
    usePersonalityForm();

  const [questionNum, setQuestionNum] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>(answers ?? []);

  useEffect(() => {
    submitAnswers(formValues);
  }, [questionNum]);

  if (!questions) {
    return <Spinner />;
  }

  return (
    <Container p="0">
      <Heading size="lg" color="brand.600" mb="4">
        Question {questionNum + 1} of {numQuestions}
      </Heading>
      <Flex direction="column" bg="brand.200" p="10">
        <Heading size="md" color="brand.600" mb="4">
          {questions[questionNum].question}
        </Heading>
        <RadioGroup
          ml="5"
          value={formValues[questionNum] || -1}
          onChange={(v) =>
            setFormValues({
              ...formValues,
              [questionNum]: v,
            })
          }
        >
          {questions[questionNum].answers.map((v, i) => {
            return (
              <Radio
                h="10"
                mb="2"
                borderColor="brand.600"
                colorScheme="brand"
                key={i}
                value={`${String.fromCharCode(i + 65)}`}
              >
                <Text color="brand.500">{v}</Text>
              </Radio>
            );
          })}
        </RadioGroup>
        <Flex justifyContent="flex-start" mt="2em">
          {questionNum > 0 && (
            <Button variant="outline" w="6em" mx="2" onClick={() => setQuestionNum(questionNum - 1)}>
              Previous
            </Button>
          )}
          {questionNum < numQuestions - 1 && (
            <Button w="6em" mx="2" onClick={() => setQuestionNum(questionNum + 1)}>
              Next
            </Button>
          )}
          {questionNum === numQuestions - 1 &&
            Object.values(formValues).length === numQuestions && (
              <Button mw="6em" onClick={() => submitAnswers(formValues, true)}>
                Submit answers
              </Button>
            )}
        </Flex>
      </Flex>
      <Link href="/">
        <Button mt="4em" width="100%">
          Take me Home
        </Button>
      </Link>
    </Container>
  );
};

export default Form;
