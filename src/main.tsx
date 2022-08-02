import { ChakraProvider } from "@chakra-ui/react";
import { PrismicProvider } from "@prismicio/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { client } from "./services/prismic";
import { themes } from "./styles/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </ChakraProvider>
  </React.StrictMode>
);
