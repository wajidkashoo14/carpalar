import {
  Container,
  Flex,
  Box,
  Input,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();
  return (
    <Container
      maxW="100%"
      minH="100vh"
      display="flex"
      alignItems="center"
      px="3rem"
      mb="8rem"
      mt="-2rem"
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
            <Text color="#F8ECD1">You don't have an account</Text>
            <Button
              my={5}
              className="primaryButton"
              backgroundColor="#4258EF"
              _hover={{ backgroundColor: "#273edc" }}
              _focus={{ outline: "none" }}
              color="white"
              onClick={(e) => {
                router.push("/signup");
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Flex>
      <Flex>
        <Box ml="3rem" width="90%" textAlign="center">
          <Heading my="1.5rem" width="100%">
            Sign In to your account
          </Heading>
          <Text my="3" textAlign="center" opacity="0.5">
            Enter your details to proceed further
          </Text>
          <Input type="text" placeHolder="Email" my="2" />

          <Input type="text" placeHolder="Password" my="2" />

          <Button
            my={5}
            className="primaryButton"
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            width="100%"
          >
            Sign in
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}

export default Signin;
