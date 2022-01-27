import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  {
    colors: {
      brand: {
        50: "#f5f3ef",
        100: "#f5f3ef",
        200: "#eeebe3",
        300: "#eaf1ec",
        500: "#357362",
        600: "#0e393b",
      },
    },
  }
);

export default theme;
