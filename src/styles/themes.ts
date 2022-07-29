import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: "gray.500",
          fontWeight: "semibold",
          fontSize: "14px",
        },
      },
    },
  },
};

export const themes = extendTheme(customTheme);
