import { Button, Flex } from "@chakra-ui/react";

interface Props {
  onPrev?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
}

const FormControls = ({ onPrev, onNext, onSubmit }: Props) => {
  return (
    <Flex justifyContent="flex-start" mt="2em">
      {!!onPrev && (
        <Button variant="outline" w="6em" mx="2" onClick={onPrev}>
          Previous
        </Button>
      )}
      {onNext && (
        <Button w="6em" mx="2" onClick={onNext}>
          Next
        </Button>
      )}
      {onSubmit && (
        <Button mw="6em" onClick={onSubmit}>
          Submit answers
        </Button>
      )}
    </Flex>
  );
};

export default FormControls;
