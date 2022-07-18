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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import DashboardLayout from "../../components/Layout/DashboardLayout";

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
    <DashboardLayout>
      <Flex
        flexDir="column"
        width="80vw"
        maxHeight="100vh"
        mb="45%"
        pt="6rem"
        px={5}
      >
        <Box bg="#030303" p="7" color="#fff" borderRadius={10}>
          <Heading fontSize="1.5rem" width="inherit">
            Account Information
          </Heading>
          <Flex>
            <Text>Name </Text>&nbsp;
            <Text>Address </Text>&nbsp;
            <Text>Number </Text>&nbsp;
          </Flex>
        </Box>
        <Heading my={4} ml="1rem">
          Update Profile
        </Heading>
        <Box
          width={300}
          height={200}
          position="absolute"
          boxShadow="lg"
          left="75%"
          top="23%"
        >
          <Heading fontSize="1.5rem" mt={3} p={3} textAlign="center">
            General Information
          </Heading>
        </Box>
        <ChakraProvider theme={theme}>
          <Button
            marginLeft="0"
            my={9}
            position="absolute"
            right="30%"
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
          py={5}
          width={"10vw"}
        >
          Update
        </Button>
      </Flex>
    </DashboardLayout>
  );
}

export default profile;
