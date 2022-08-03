import React from "react";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
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
      <Link href="/" className={styles.navLink}>
        <Image
          src="/logo.jpeg"
          alt="logo"
          height="3.5rem"
          width="10rem"
          objectFit="cover"
          cursor="pointer"
        />
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
        <Link
          fontSize="20px"
          textDecoration="none"
          _hover={{ color: "grey.700" }}
          href="/signin"
        >
          Apply to drive
        </Link>
      </Flex>
    </Container>
  );
}

export default Navbar;
