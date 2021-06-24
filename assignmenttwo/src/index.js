import react from "react";
import { useState, useEffect } from "react";
import logo from "./logo.png";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  Image,
  Link,
  Grid,
  SimpleGrid,
  Flex,
  Tabs,
  Tab,
  Button,
  TabList,
  TabPanels,
  TabPanel,
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
  var desserts = [
    {
      name: "Pastel de Tres Leches",
      description:
        "layered cake with 'three milks', mascarpone cream, housemade vanilla rum, strawberries, toasted coconut, sugared almonds",
      cost: 10.99,
    },
    {
      name: "Churros y Chocolate or Sopapillas y Chocolate",
      description:
        "traditional mexican doughnuts, cinnamon-sugar, chocolate pudding",
      cost: 5.99,
    },
    {
      name: "Platanos Fritos",
      description: "fried plantains, sweetened cream, powdered sugar",
      cost: 2.99,
    },
    {
      name: "Pay de Limón",
      description: "key lime pie, strawberries, fresh cream",
      cost: 5.99,
    },
  ];
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
  const [dessertsState, setdessertsState] = useState(
    new Array(desserts.length).fill(false)
  );
  const [margsState, setmargsState] = useState(
    new Array(margs.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  const handleTacoChange = (position) => {
    const updatedCheckedState = tacosState.map((item, index) =>
      index === position ? !item : item
    );

    settacosState(updatedCheckedState);
  };
  const handleMargChange = (position) => {
    const updatedCheckedState = margsState.map((item, index) =>
      index === position ? !item : item
    );

    setmargsState(updatedCheckedState);
  };
  const handleDessChange = (position) => {
    const updatedCheckedState = dessertsState.map((item, index) =>
      index === position ? !item : item
    );

    setdessertsState(updatedCheckedState);
  };
  const [value, setValue] = useState("Togo");
  function ToGo() {
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="Togo">Togo</Radio>
          <Radio value="Dine In">Dine In</Radio>
          <Radio value="Take Out">Take Out</Radio>
        </Stack>
      </RadioGroup>
    );
  }
  function Tacos() {
    return (
      <>
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
                onChange={() => handleTacoChange(index)}
              ></input>
            </HStack>
          </>
        ))}
      </>
    );
  }
  function Margs() {
    return (
      <>
        {margs.map((marg, index) => (
          <>
            <HStack>
              <Tooltip label={marg.description}>
                <Text>{marg.name}</Text>
              </Tooltip>
              <Spacer />

              <input
                checked={margsState[index]}
                type="checkbox"
                onChange={() => handleMargChange(index)}
              ></input>
            </HStack>
          </>
        ))}
      </>
    );
  }
  function Desserts() {
    return (
      <>
        {desserts.map((marg, index) => (
          <>
            <HStack>
              <Tooltip label={marg.description}>
                <Text>{marg.name}</Text>
              </Tooltip>
              <Spacer />

              <input
                checked={dessertsState[index]}
                type="checkbox"
                onChange={() => handleDessChange(index)}
              ></input>
            </HStack>
          </>
        ))}
      </>
    );
  }

  function Reciept() {
    return (
      <Box bg="white" rounded="2xl" p="4">
        <Center m="5">
          <VStack>
            <Heading size="md">Unpure Taqueria Receipt * {value} *</Heading>
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
                return <Text>${tacos[index].cost}</Text>;
              }
            })}
          </VStack>
        </HStack>
        <HStack>
          <VStack textAlign="end">
            <Text>Margaritas</Text>
            {margsState.map((item, index) => {
              if (item === true) {
                return <Text>{margs[index].name}</Text>;
              }
            })}
          </VStack>
          <Spacer />
          <VStack>
            <Text>Cost</Text>
            {margsState.map((item, index) => {
              if (item === true) {
                return <Text>${margs[index].cost}</Text>;
              }
            })}
          </VStack>
        </HStack>
        <HStack>
          <VStack textAlign="end">
            <Text>Desserts</Text>
            {dessertsState.map((item, index) => {
              if (item === true) {
                return <Text>{desserts[index].name}</Text>;
              }
            })}
          </VStack>
          <Spacer />
          <VStack>
            <Text>Cost</Text>
            {margsState.map((item, index) => {
              if (item === true) {
                return <Text>${desserts[index].cost}</Text>;
              }
            })}
          </VStack>
        </HStack>
        <Divider />
        <HStack>
          <Text>Total</Text>
          <Spacer />
          <Text>${total}</Text>
        </HStack>
      </Box>
    );
  }

  useEffect(() => {
    const totalTacoPrice = tacosState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        console.log(total);
        return sum + tacos[index].cost;
      }
      return sum;
    }, 0);
    const totalMargPrice = margsState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        console.log(total);
        return sum + margs[index].cost;
      }
      return sum;
    }, 0);
    const totalDessPrice = dessertsState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        console.log(total);
        return sum + desserts[index].cost;
      }
      return sum;
    }, 0);

    setTotal(totalTacoPrice + totalMargPrice + totalDessPrice);
  });

  return (
    <div style={{ padding: "10px" }}>
      <Flex marginBottom="5">
        <Box w="100%" p="4">
          <Center>
            <Heading>Pure Taqueria</Heading>
            <Spacer />
            <Image boxSize="3xs" fit="scale-down" src={logo} />
          </Center>
        </Box>
      </Flex>
      <SimpleGrid marginBottom="20px" spacing="20px" minChildWidth="400px">
        <Box p="4">
          <Center>
            <Heading size="md">Order Menu</Heading>
          </Center>
          <FormLabel>Name for Order:</FormLabel>
          <HStack>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <Button
              type="button"
              onClick={() =>
                alert(
                  "Hey " +
                    name +
                    ", your order will be ready soon. Your total cost is: $" +
                    total
                )
              }
            >
              Order!
            </Button>
          </HStack>
          <ToGo />
          <SimpleGrid spacing="10px" minChildWidth="200px"></SimpleGrid>
          <Tabs>
            <TabList>
              <Tab>Tacos</Tab>
              <Tab>Margaritas</Tab>
              <Tab>Desert</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Tacos />
              </TabPanel>
              <TabPanel>
                <Margs />
              </TabPanel>
              <TabPanel>
                <Desserts />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Reciept />
      </SimpleGrid>
      <Box boxSize="md" />
      <Box w="100%" p="4">
        <Center>
          <Text>Unpure Taqueria est. 1921</Text>
        </Center>
      </Box>
    </div>
  );
}

reactdom.render(
  <ChakraProvider>
    <Box
      minHeight="100%"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
    >
      <App />
    </Box>
  </ChakraProvider>,
  document.getElementById("root")
);
