import react from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  Link,
  Grid,
  SimpleGrid,
  Flex,
  GridItem,
  Stack,
  Spacer,
  Center,
  Radio,
  RadioGroup,
  Box,
  FormLabel,
} from "@chakra-ui/react";

reactdom.render(
  <ChakraProvider>
    <div style={{ padding: "10px" }}>
      <Flex marginBottom="5">
        <Box w="100%" p="4" bg="red.400">
          Pure Taq
        </Box>
      </Flex>
      <SimpleGrid marginBottom="20px" spacing="20px" minChildWidth="400px">
        <Box bg="tomato" p="4">
          Order Menu
        </Box>
        <Box bg="tomato" p="4">
          Recipt
        </Box>
      </SimpleGrid>

      <Box pos="sticky" bottom="0" left="0" w="100%" p="4" bg="red.400">
        Not really Pure 2021
      </Box>
    </div>
  </ChakraProvider>,
  document.getElementById("root")
);
