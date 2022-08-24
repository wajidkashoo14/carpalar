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
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const router = useRouter();

  const onClickHandler = () => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const token = Cookies.get("token")
      ? JSON.parse(Cookies.get("token"))
      : null;
    console.log("dd", user, token);
    if (user && user._id && token) {
      router.push("/user/dashboard");
    } else {
      router.push("/signin");
    }
  };
  return (
    <Container
      maxW="100vw"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      px="10"
      py="auto"
      height="4rem"
      boxShadow="lg"
      bg="#fff"
    >
      {/* <Box>
        <HamburgerIcon display={{ sm: "block", md: "block", lg: "none" }} />
      </Box> */}
      <Link href="/" className={styles.navLink} passHref>
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
          href="/#howitworks"
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
        {Cookies.get("user") && Cookies.get("token") ? (
          <Button
            onClick={() => router.push("/user/dashboard")}
            size={"sm"}
            colorScheme={"blue"}
            _focus={{ outline: "none" }}
            display="grid"
            placeItems="center"
            variant="outline"
            marginBottom={2}
          >
            Dashboard
          </Button>
        ) : (
          <Button
            onClick={onClickHandler}
            size={"sm"}
            colorScheme={"blue"}
            _focus={{ outline: "none" }}
            display="grid"
            placeItems="center"
            variant="outline"
            marginBottom={2}
          >
            Apply to drive
          </Button>
        )}
      </Flex>
    </Container>
  );
}

export default Navbar;
