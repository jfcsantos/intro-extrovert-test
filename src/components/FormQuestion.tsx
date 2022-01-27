import { Heading, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { Question } from "../model/types";

interface Props {
  value: string | number;
  question: Question;
  onChange: (v: string) => void;
}

const FormQuestion = ({ value, question, onChange }: Props) => {
  return (
    <>
      <Heading size="md" color="brand.600" mb="4">
        {question.question}
      </Heading>
      <RadioGroup ml="5" value={value} onChange={(v) => onChange(v)}>
        {question.answers.map((v, i) => {
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
    </>
  );
};

export default FormQuestion;
