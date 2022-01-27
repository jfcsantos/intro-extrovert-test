import { Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { usePersonalityForm } from "../model/context";

const Results = () => {
  const { finalResults, loading } = usePersonalityForm();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && !finalResults) {
      setLocation("/");
    }
  }, [finalResults, loading]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Flex
      direction="column"
      alignItems="center"
      flex="1"
      justifyContent="center"
    >
      <Heading size="md" color="brand.500" textAlign="center" mb="10">
        {finalResults?.title}
      </Heading>
      <Flex
        bg="brand.200"
        direction="column"
        flex="1"
        p="5"
        alignItems="center"
      >
        <Text fontSize="lg" color="brand.600" textAlign="center" mb="10">
          {finalResults?.description}
        </Text>
      </Flex>
      <Link href="/">
        <Button mt="4em" width="100%">
          Back to Home page
        </Button>
      </Link>
    </Flex>
  );
};

export default Results;
