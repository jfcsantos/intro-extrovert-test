import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "wouter";
import React from "react";
import Form from "./Form";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      flex="1"
      justifyContent="center"
    >
      <Heading size="lg" color="brand.600" textAlign="center" mb="10">
        We've created a quiz which can answer this for you!
      </Heading>
      <Link href="/questions">
        <Button colorScheme="brand">Take the quiz now!</Button>
      </Link>
    </Flex>
  );
};

export default Home;
