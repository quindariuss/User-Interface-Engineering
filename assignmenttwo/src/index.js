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
  Checkbox,
  GridItem,
  Input,
  Tooltip,
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
  var margs = [
    {
      name: "PURE Double Barrel Margarita",
      description:
        "Herradura double barrel reposado, lime, agave nectar, Combier orange liqueur",
      cost: 9.99,
    },
    {
      name: "Skinny Margarita",
      description: "Lunazul silver tequila, fresh squeezed limes, agave nectar",
      cost: 9.99,
    },
    {
      name: "Manarita",
      description:
        "our skinny margarita fattened up with a Gran Gala & reposado floater",
      cost: 9.99,
    },
    {
      name: "Pepino Diablo",
      description: "Tanteo jalapeño tequila, cucumber, cilantro, lime",
      cost: 9.99,
    },
    {
      name: "Skinny Love Margarita",
      description:
        "Lunazul silver tequila, lime, agave nectar, fresh strawberry, muddled basil",
      cost: 9.99,
    },
    {
      name: "Pomegrantate Skinny Margarita",
      description: "Skinny margarita, PAMA pomegranate liqueur",
      cost: 9.99,
    },
    {
      name: "Prickly Pear Margarita",
      description: "Silver tequila, triple sec, lime, prickly pear puree",
      cost: 9.99,
    },
    {
      name: "Pure Margarita",
      description: "rocks or frozen",
      cost: 6.99,
    },
  ];
  var tacos = [
    {
      name: "Puerco al Pastor",
      description:
        "marinated & sauteéd pork, pineapple, chihuahua cheese, onion, cilantro, chile de arbol salsa",
      selected: false,
      cost: 10.99,
    },
    {
      name: "Birria",
      description:
        "braised lamb leg, fundido cheese, cilantro, onion, crispy grilled adobo tortilla, watercress salad, habanero salsa",
      selected: false,
      cost: 10.99,
    },
    {
      name: "Coliflor o Portobello ",
      description:
        "cumin & turmeric roasted cauliflower OR cilantro grilled portobello mushroom, pumpkin seed pesto, smoked cashew salsa",
      selected: true,
      cost: 10.99,
    },
    {
      name: "Pollo",
      description: "chipotle chicken, diced onion, cilantro, mexicana salsa",
      selected: false,
      cost: 10.99,
    },
    {
      name: "Carne Asada",
      description:
        "marinated & grilled all-natural steak, diced onion, cilantro, guajillo salsa",
      selected: false,
      cost: 10.99,
    },
    {
      name: "Camarón o Pescado",
      description:
        "fried shrimp or grouper, poblano slaw, chipotle mayo, cruda tomatillo salsa",
      selected: false,
      cost: 10.99,
    },
    {
      name: "Pescado a la Parrilla",
      description:
        "citrus-grilled catch of the day, charred pico de gallo, avocado, cruda tomatillo salsa",
      selected: false,
      cost: 10.99,
    },
  ];
  const [tacosState, settacosState] = useState(
    new Array(tacos.length).fill(false)
  );
  const [margsState, setmargsState] = useState(
    new Array(margs.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = tacosState.map((item, index) =>
      index === position ? !item : item
    );
    console.log("hello");
    settacosState(updatedCheckedState);
  };

  function Reciept() {
    return (
      <Box bg="tomato" p="4">
        <Center m="5">
          <VStack>
            <Heading size="md">Unpure Taqueria Receipt</Heading>
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
          <VStack textAlign="end">
            <Text>Taco</Text>
            {tacosState.map((item, index) => {
              if (item === true) {
                return <Text>{tacos[index].name}</Text>;
              }
            })}
          </VStack>
          <Spacer />
          <VStack>
            <Text>Cost</Text>
            {tacosState.map((item, index) => {
              if (item === true) {
                return <Text>{tacos[index].cost}</Text>;
              }
            })}
          </VStack>
        </HStack>
        <Divider />
        <HStack>
          <Text>Total</Text>
          <Spacer />
          <Text>Cost</Text>
        </HStack>
      </Box>
    );
  }

  return (
    <div style={{ padding: "10px" }}>
      <Flex marginBottom="5">
        <Box w="100%" p="4" bg="red.400">
          <Center>
            <Heading>Unpure Taqueria</Heading>
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
          <SimpleGrid spacing="10px" minChildWidth="200px">
            {tacos.map((taco, index) => (
              <>
                <HStack>
                  <Tooltip label={taco.description}>
                    <Text>{taco.name}</Text>
                  </Tooltip>
                  <Spacer />

                  <input
                    checked={tacosState[index]}
                    value={taco.selected}
                    type="checkbox"
                    onChange={() => handleOnChange(index)}
                  ></input>
                </HStack>
              </>
            ))}
          </SimpleGrid>
        </Box>
        <Reciept />
      </SimpleGrid>
      <Box w="100%" p="4" bg="red.400">
        <Center>
          <Text>Unpure Taqueria est. 1921</Text>
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
