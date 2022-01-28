import {
  ChakraProvider,
  Text,
  Flex,
  Container,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { Route, Link, useLocation } from "wouter";
import Logo from "./components/Logo";
import { FormDataProvider } from "./model/context";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Results from "./pages/Results";
import theme from "./theme";

export const App = () => {
  const [location, setLocation] = useLocation();
  return (
    <ChakraProvider resetCSS theme={theme}>
      <FormDataProvider>
        <Container
          display="flex"
          maxW="full"
          flexDirection="column"
          minH="100vh"
          p={0}
          bg="brand.500"
        >
          <Flex
            as="header"
            position="fixed"
            w="100%"
            align="flex-start"
            h="78px"
            p="10px 40px"
            justifyContent="space-between"
            alignItems="center"
            bg="brand.500"
          >
            <Link href="/">
              <Logo onClick={() => setLocation("/")} />
            </Link>
            <IconButton
              size="md"
              color="white"
              fontSize="2em"
              aria-label="home"
              onClick={() => setLocation("/")}
              icon={<FaHome />}
            />
          </Flex>
          <Flex
            direction="column"
            background="brand.100"
            marginTop="78px"
            borderTopRadius="20"
            bg="brand.200"
            flex="1"
            alignItems="center"
          >
            <Flex direction="column" p="10" flex="1">
              <Heading color="brand.500" size="xl" mt="10">
                What type of person are you?
              </Heading>
              <Flex
                m="4em auto auto"
                p="10"
                bg="brand.100"
                boxShadow="xl"
                borderRadius="20"
                minHeight="20em"
                maxW="40em"
                w="100%"
                justifyContent="center"
              >
                <Route path="/" component={Home} />
                <Route path="/questions" component={Form} />
                <Route path="/results" component={Results} />
              </Flex>
            </Flex>

            <Text color="brand.500" p="2em" alignSelf="flex-start">
              made by João Santos 2022
            </Text>
          </Flex>
        </Container>
      </FormDataProvider>
    </ChakraProvider>
  );
};
