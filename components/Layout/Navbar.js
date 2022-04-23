import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import { Container, Flex } from "@chakra-ui/react";

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
        href="/"
        // fontSize="25px"
        // fontWeight="bold"
        // _hover={{ color: "#273edc" }}
        // color="#"
        className={styles.navLink}
      >
        Carparlar
      </Link>

      <Flex gap="5">
        <Link fontSize="20px" _hover={{ color: "grey.700" }} href="/">
          Home
        </Link>
        <Link
          href="/"
          fontSize="20px"
          textDecoration="none"
          _hover={{ color: "grey.700" }}
        >
          Explore cars
        </Link>

        <Link
          href="/aboutus"
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
          href="/faq"
        >
          How it works
        </Link>
        <Link
          fontSize="20px"
          textDecoration="none"
          _hover={{ color: "grey.700" }}
          href="/contact"
        >
          Contact us
        </Link>
      </Flex>
    </Container>
  );
}

export default Navbar;
