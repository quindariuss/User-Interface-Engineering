import react from "react";
import { useState } from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  Link,
  Grid,
  SimpleGrid,
  Flex,
  HStack,
  VStack,
  GridItem,
  Input,
  Divider,
  Stack,
  Spacer,
  Center,
  Radio,
  RadioGroup,
  Box,
  FormLabel,
} from "@chakra-ui/react";

function App() {
  const [name, setName] = useState("");
  var tacos = [
    {
      name: "Puerco al Pastor",
      description:
        "marinated & sauteéd pork, pineapple, chihuahua cheese, onion, cilantro, chile de arbol salsa",
      selected: false,
    },
    {
      name: "Birria",
      description:
        "braised lamb leg, fundido cheese, cilantro, onion, crispy grilled adobo tortilla, watercress salad, habanero salsa",
      selected: false,
    },
    {
      name: "Coliflor o Portobello ",
      description:
        "cumin & turmeric roasted cauliflower OR cilantro grilled portobello mushroom, pumpkin seed pesto, smoked cashew salsa",
      selected: false,
    },
    {
      name: "Pollo",
      description: "chipotle chicken, diced onion, cilantro, mexicana salsa",
      selected: false,
    },
    {
      name: "Carne Asada",
      description:
        "marinated & grilled all-natural steak, diced onion, cilantro, guajillo salsa",
      selected: false,
    },
    {
      name: "Camarón o Pescado",
      description:
        "fried shrimp or grouper, poblano slaw, chipotle mayo, cruda tomatillo salsa",
      selected: false,
    },
    {
      name: "Pescado a la Parrilla",
      description:
        "citrus-grilled catch of the day, charred pico de gallo, avocado, cruda tomatillo salsa",
      selected: false,
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <Flex marginBottom="5">
        <Box w="100%" p="4" bg="red.400">
          <Center>
            <Heading>Pure Taqueria</Heading>
          </Center>
        </Box>
      </Flex>
      <SimpleGrid marginBottom="20px" spacing="20px" minChildWidth="400px">
        <Box bg="tomato" p="4">
          <Center>
            <Heading size="md">Order Menu</Heading>
          </Center>
          <FormLabel>Name for Order:</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <SimpleGrid spacing="10px" minChildWidth="100px"></SimpleGrid>
        </Box>
        <Box bg="tomato" p="4">
          <Center m="5">
            <VStack>
              <Heading size="md">Pure Taqueria Receipt</Heading>
              <Divider w="100%" />
              <Text>103 Roswell Street</Text>
              <Text>Alpharetta, GA</Text>
              <Text>30009</Text>
              <Text>(678)-240-0023</Text>
              <Divider />
              <Text>Customer Name: {name}</Text>
            </VStack>
          </Center>
          <Divider />
          <HStack>
            <Text>Item</Text>
            <Spacer />
            <Text>Cost </Text>
          </HStack>
          <Divider />
          <HStack>
            <Text>Total</Text>
            <Spacer />
            <Text>Cost</Text>
          </HStack>
        </Box>
      </SimpleGrid>
      <Box w="100%" p="4" bg="red.400">
        <Center>
          <Text>Pure Taqueria est. 1921</Text>
        </Center>
      </Box>
    </div>
  );
}

reactdom.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
