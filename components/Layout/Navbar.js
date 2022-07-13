import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import { BsPersonFill } from "react-icons/bs";
import {
  Button,
  Container,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <Container
      maxW="100vw"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      px="10"
      height="3.5rem"
      boxShadow="lg"
      bg="#fff"
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
          href="/explore"
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

        <Popover isLazy style={{ marginBottom: "2rem" }}>
          <PopoverTrigger>
            <Button
              bg="none"
              _hover={{ backgroundColor: "#4258ef" }}
              outline="none"
              _focus="none"
            >
              <BsPersonFill style={{ marginTop: "-12px" }} />
            </Button>
          </PopoverTrigger>
          <PopoverContent w="120px" mr="5">
            <PopoverArrow ml="3" />
            <PopoverCloseButton />
            <PopoverBody>
              <Flex flexDir="column">
                <Button
                  mb="2"
                  onClick={() => {
                    router.push("/signin");
                  }}
                >
                  Login
                </Button>
                <Button
                  mb="2"
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Signup
                </Button>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Container>
  );
}

export default Navbar;
