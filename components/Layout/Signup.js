import {
  Box,
  Container,
  Flex,
  Input,
  Button,
  Image,
  Heading,
  Text,
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
      alignItems="center"
      px="3rem"
      mt="-2rem"
      mb="5rem"
    >
      <Flex maxW="50%">
        <Box position="relative">
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
            <Text color="#F8ECD1">Do you already have an account</Text>
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
      <Flex>
        <Box ml="3rem" pr="2rem" width="70%">
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
