import {
  Box,
  Container,
  Flex,
  Input,
  Button,
  Image,
  Heading,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  return (
    <Container
      maxW="100%"
      minH="100vh"
      display="flex"
      alignItems="flex-start"
      px="3rem"
      mt="-2rem"
      mb="15rem"
      pt="15vh"
    >
      <Flex maxW="50%">
        <Box position="relative" mt={10}>
          <Image
            src="./homecar.jpg"
            alt="signup"
            w="90%"
            height="100%"
            style={{ borderRadius: "15px" }}
          />
          <Heading
            position="absolute"
            top="5%"
            left="5%"
            fontSize="4rem"
            width="50%"
            color="#F8ECD1"
          >
            A new way to buy cars
          </Heading>
          <Box
            height="5rem"
            bg="transparent"
            mt="auto"
            w="90%"
            style={{ borderRadius: "15px" }}
            border="1px solid grey"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px="10"
            position="absolute"
            bottom="0%"
            left="0"
          >
            <Text color="#F8ECD1">Do you already have an account?</Text>
            <Button
              my={5}
              className="primaryButton"
              backgroundColor="#4258EF"
              _hover={{ backgroundColor: "#273edc" }}
              _focus={{ outline: "none" }}
              color="white"
              onClick={(e) => {
                router.push("/signin");
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Flex>
      <Flex boxShadow="lg" borderRadius={10} margin="auto" width="40vw">
        <Box margin="auto" px="2rem">
          <Heading my="1.5rem" textAlign="center">
            Sign Up to get started
          </Heading>
          <Text my="3" textAlign="center" opacity="0.5">
            Enter your details to proceed further
          </Text>
          <Input type="text" placeHolder="Email" my="1" />
          <Flex>
            <Input
              type="text"
              placeHolder="First name"
              my="1"
              width="50%"
              mr="1"
            />
            <Input type="text" placeHolder="Last name" my="1" width="50%" />
          </Flex>
          <Input type="number" placeHolder="Mobile number" my="1" />

          <Input type="text" placeHolder="Password" />
          <Input type="password" placeHolder="Confirm password" my="1" />

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have a smartphone">I have a smartphone</label>
            <Box>
              <Checkbox mx={1} defaultChecked id="I have a smartphone">
                Yes
              </Checkbox>
              <Checkbox mx={1} defaultChecked id="I have a smartphone">
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have a guarantor">I have a guarantor</label>
            <Box>
              <Checkbox mx={1} defaultChecked id="I have a guarantor">
                Yes
              </Checkbox>
              <Checkbox mx={1} defaultChecked id="II have a guarantor">
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have a valid drivers license">
              I have a valid drivers license
            </label>
            <Box>
              <Checkbox
                mx={1}
                defaultChecked
                id="I have a valid drivers license"
              >
                Yes
              </Checkbox>
              <Checkbox
                mx={1}
                defaultChecked
                id="I have a valid drivers license"
              >
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I am 25 or Older">I am 25 or Older</label>
            <Box>
              <Checkbox mx={1} defaultChecked id="I am 25 or Older">
                Yes
              </Checkbox>
              <Checkbox mx={1} defaultChecked id="I am 25 or Older">
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I am eligible on ride-hailing platforms (e.g: uber, taxify, etc)">
              I am eligible on ride-hailing platforms (uber, taxify, etc)
            </label>
            <Box>
              <Checkbox
                mx={1}
                defaultChecked
                id="I am eligible on ride-hailing platforms (e.g: uber, taxify, etc)"
              >
                Yes
              </Checkbox>
              <Checkbox
                mx={1}
                defaultChecked
                id="I am eligible on ride-hailing platforms (e.g: uber, taxify, etc)"
              >
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have my BVN">I have my BVN</label>
            <Box>
              <Checkbox mx={1} defaultChecked id="I have my BVN">
                Yes
              </Checkbox>
              <Checkbox mx={1} defaultChecked id="I have my BVN">
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have a bank statement">II have a bank statement</label>
            <Box>
              <Checkbox mx={1} defaultChecked id="I have a bank statement">
                Yes
              </Checkbox>
              <Checkbox mx={1} defaultChecked id="I have a bank statement">
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have my NIN">I have my NIN</label>
            <Box>
              <Checkbox mx={1} defaultChecked id="I have my NIN">
                Yes
              </Checkbox>
              <Checkbox mx={1} defaultChecked id="I have my NIN">
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have application fee (N10,000.00)">
              I have application fee (N10,000.00)
            </label>
            <Box>
              <Checkbox
                mx={1}
                defaultChecked
                id="I have application fee (N10,000.00)"
              >
                Yes
              </Checkbox>
              <Checkbox
                mx={1}
                defaultChecked
                id="I have application fee (N10,000.00)"
              >
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="I have my electricity bill/prove of residence">
              I have my electricity bill/prove of residence
            </label>
            <Box>
              <Checkbox
                mx={1}
                defaultChecked
                id="I have my electricity bill/prove of residence"
              >
                Yes
              </Checkbox>
              <Checkbox
                mx={1}
                defaultChecked
                id="I have my electricity bill/prove of residence"
              >
                No
              </Checkbox>
            </Box>
          </Box>

          <Box py={2} display="flex" justifyContent="space-between">
            <label id="Are you able to pay the initial deposit that is 10% value of the total amount">
              I have application fee (N10,000.00)
            </label>
            <Box>
              <Checkbox
                mx={1}
                defaultChecked
                id="IAre you able to pay the initial deposit that is 10% value of the total amount"
              >
                Yes
              </Checkbox>
              <Checkbox
                mx={1}
                defaultChecked
                id="Are you able to pay the initial deposit that is 10% value of the total amount"
              >
                No
              </Checkbox>
            </Box>
          </Box>

          <Button
            my={5}
            className="primaryButton"
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            width="100%"
          >
            Continue
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}

export default Signup;
