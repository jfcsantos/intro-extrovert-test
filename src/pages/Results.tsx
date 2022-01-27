import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { usePersonalityForm } from "../model/hooks";

const Results = () => {
  const { questions, numQuestions, answers, finalResults, submitAnswers } =
    usePersonalityForm();
  return (
    <Flex
      direction="column"
      alignItems="center"
      flex="1"
      justifyContent="center"
    >
      <Heading size="md" color="brand.500" textAlign="center" mb="10">
        You are a typical:
      </Heading>
      <Flex
        bg="brand.200"
        direction="column"
        flex="1"
        w="80%"
        p="5"
        alignItems="center"
      >
        <Heading size="lg" color="brand.600" textAlign="center" mb="10">
          {finalResults}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Results;
