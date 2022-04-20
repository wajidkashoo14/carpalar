import React from "react";
import { Container, Link, Flex } from "@chakra-ui/react";

function Navbar() {
  return (
    <Container
      maxW="100%"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      px="10"
      height="5rem"
    >
      <Link
        fontSize="25px"
        fontWeight="bold"
        _hover={{ color: "#273edc" }}
        color="#4258EF"
      >
        Carparlar
      </Link>

      <Flex gap="5">
        <Link fontSize="20px" _hover={{ color: "grey.700" }}>
          Home
        </Link>
        <Link
          fontSize="20px"
          textDecoration="none"
          _hover={{ color: "grey.700" }}
        >
          Explore cars
        </Link>
        <Link
          fontSize="20px"
          textDecoration="none"
          _hover={{ color: "grey.700" }}
        >
          About us
        </Link>
        <Link
          fontSize="20px"
          textDecoration="none"
          _hover={{ color: "grey.700" }}
        >
          How it works
        </Link>
      </Flex>
    </Container>
  );
}

export default Navbar;
