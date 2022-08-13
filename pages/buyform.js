import {
  Container,
  Heading,
  Text,
  Box,
  extendTheme,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Buyform() {
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)",
  };
  const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top",
              },
            },
          },
        },
      },
    },
  });
  return (
    <Box
      mb="40%"
      height="100vh"
      display="flex"
      flexDir="column"
      width="50vw"
      p="1rem 5rem"
    >
      <Heading pt="10rem"> Fill in your info</Heading>
      <Box my={8} mWidth="50vw">
        <FormControl my={4}>
          <FormLabel id="firstname">First Name</FormLabel>
          <Input id="firstname" type="Text" />
        </FormControl>
        <FormControl my={4}>
          <FormLabel id="Lastname">Last Name</FormLabel>
          <Input id="Lastname" type="text" />
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Email address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl my={4}>
          <FormLabel id="Mobilenumber">Mobile Number</FormLabel>
          <Input id="Mobilenumber" type="number" />
        </FormControl>
      </Box>
      <Button
        backgroundColor="#4258EF"
        _hover={{ backgroundColor: "#273edc" }}
        _focus={{ outline: "none" }}
        color="#ffffff"
        px={8}
        py={5}
        fontSize="lg"
      >
        Submit
      </Button>
    </Box>
  );
}

export default Buyform;
