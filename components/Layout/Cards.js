import { Container, Box } from "@chakra-ui/react";
import React from "react";

function Cards() {
  return (
    <Container
      maxW="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="10"
      px="8%"
      py="10"
    >
      <Box
        bg="tomato"
        w="45%"
        p={4}
        color="white"
        minH="35vh"
        backgoundolor="red.400"
      >
        This is the Box
      </Box>
      <Box
        bg="tomato"
        w="45%"
        p={4}
        color="white"
        minH="35vh"
        backgoundolor="red.400"
      >
        This is the Box
      </Box>
      <Box
        bg="tomato"
        w="45%"
        p={4}
        color="white"
        minH="35vh"
        backgoundolor="red.400"
      >
        This is the Box
      </Box>
    </Container>
  );
}

export default Cards;
