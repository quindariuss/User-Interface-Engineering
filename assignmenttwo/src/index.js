import react from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  Link,
  Center,
  FormLabel,
} from "@chakra-ui/react";

reactdom.render(
  <ChakraProvider>
    <div>
      <Center>
        <Heading>Gummy World</Heading>
      </Center>
      <form>
        <FormLabel>Name:</FormLabel>
        <input type="text" />
      </form>
    </div>
  </ChakraProvider>,
  document.getElementById("root")
);
