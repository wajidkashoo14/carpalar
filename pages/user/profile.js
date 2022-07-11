import {
  Container,
  Heading,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

function profile() {
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
    <Container minW="100%" height="100vh" mb="45%" pt="6rem">
      <Heading mb={10} ml="1rem">
        Profile settings
      </Heading>

      <Box position="relative">
        <Box
          w="98%"
          h="180px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          borderRadius={10}
          mx="auto"
        />
        <Heading fontSize="1.8rem" position="absolute" top="15%" left="10%">
          Account Information
        </Heading>
        <Box position="absolute" top="33%" left="10%">
          <span>Name </span>
          <span>Address </span>
          <span>Number </span>
        </Box>
      </Box>
      <ChakraProvider theme={theme}>
        <Button
          marginLeft="0"
          my={9}
          position="absolute"
          right="45%"
          backgroundColor="#4258EF"
          _hover={{ backgroundColor: "#273edc" }}
          _focus={{ outline: "none" }}
          color="#ffffff"
        >
          <AiOutlineEdit />
        </Button>
        <Box p={4} width="50%" mt={5}>
          <FormControl variant="floating" id="first-name" isRequired>
            <Input placeholder=" " name="First Name" />
            <FormLabel>First name</FormLabel>
          </FormControl>
        </Box>
        <Box p={4} width="50%">
          <FormControl variant="floating" id="Last Name" isRequired>
            <Input placeholder=" " name="Last Name" />
            <FormLabel>Last name</FormLabel>
          </FormControl>
        </Box>
        <Box p={4} width="50%">
          <FormControl variant="floating" id="Gender" isRequired>
            <Input placeholder=" " name="Gender" />
            <FormLabel>Gender</FormLabel>
          </FormControl>
        </Box>
        <Box p={4} width="50%">
          <FormControl variant="floating" id="DOB" isRequired>
            <Input placeholder=" " name="DOB" type="date" />
            <FormLabel>DOB</FormLabel>
          </FormControl>
        </Box>
        <Box p={4} width="50%">
          <FormControl variant="floating" id="email address" isRequired>
            <Input placeholder=" " name="email address" type="email" />
            <FormLabel>Email Address</FormLabel>
          </FormControl>
        </Box>
        <Box p={4} width="50%">
          <FormControl variant="floating" id="mobile number" isRequired>
            <Input placeholder=" " name="mobile number" type="number" />
            <FormLabel>Mobile Number</FormLabel>
          </FormControl>
        </Box>
        <Flex width="50%" p={4} flexDir="column">
          <Heading fontSize="1.2rem" p={4}>
            Address
          </Heading>
          <Flex>
            <Box p={4} width="50%">
              <FormControl variant="floating" id="Street" isRequired>
                <Input placeholder=" " name="Street" type="text" />
                <FormLabel>Street</FormLabel>
              </FormControl>
            </Box>
            <Box p={4} width="50%">
              <FormControl variant="floating" id="area" isRequired>
                <Input placeholder=" " name="area" type="text" />
                <FormLabel>Area</FormLabel>
              </FormControl>
            </Box>
          </Flex>
          <Flex>
            <Box p={4} width="50%">
              <FormControl variant="floating" id="Street" isRequired>
                <Input placeholder=" " name="Street" type="text" />
                <FormLabel>Country</FormLabel>
              </FormControl>
            </Box>
            <Box p={4} width="50%">
              <FormControl variant="floating" id="State" isRequired>
                <Input placeholder=" " name="State" type="text" />
                <FormLabel>State</FormLabel>
              </FormControl>
            </Box>
          </Flex>
          <Flex>
            <Box p={4} width="50%">
              <FormControl variant="floating" id="postal code" isRequired>
                <Input placeholder=" " name="postal code" />
                <FormLabel>Postal Code</FormLabel>
              </FormControl>
            </Box>
          </Flex>
        </Flex>
      </ChakraProvider>
      <Button
        backgroundColor="#4258EF"
        _hover={{ backgroundColor: "#273edc" }}
        _focus={{ outline: "none" }}
        color="#ffffff"
        ml={7}
        px={5}
      >
        Update
      </Button>
    </Container>
  );
}

export default profile;
