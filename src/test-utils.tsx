import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { FormDataProvider } from "./model/context";

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>
    <FormDataProvider>{children}</FormDataProvider>
  </ChakraProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
