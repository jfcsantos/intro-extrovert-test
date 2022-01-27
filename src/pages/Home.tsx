import { Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "wouter";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      flex="1"
      justifyContent="center"
    >
      <Heading size="lg" color="brand.600" textAlign="center" mb="10">
        We've created a quiz that can answer this for you!
      </Heading>
      <Link href="/questions">
        <Button colorScheme="brand">Take the quiz now!</Button>
      </Link>
    </Flex>
  );
};

export default Home;
