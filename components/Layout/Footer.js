import { Container, Flex, Heading, Text, Input } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "../../styles/footer.module.css";

function Footer() {
  return (
    <Container
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      p="5"
      height="50vh"
      maxW="100%"
      bg="#000"
      gap="5"
      borderTopLeftRadius="200px"
      pt="5rem"
      mt="-8rem"
    >
      <Flex flexDir="column" gap="5">
        <Link href="/">
          <Heading fontSize="lg" fontWeight="bold" color="#FFFFFF">
            Carparlar
          </Heading>
        </Link>
        <Text fontSize="sm" color="#FFFFFF" width="20rem">
          {` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book`}
        </Text>
      </Flex>

      <Flex flexDir="column" gap="5">
        <Heading fontSize="lg" color="#FFFFFF">
          Office
        </Heading>
        <Text color="#bcb3c6">2 Martins Street</Text>
        <Text color="#bcb3c6">Lagos Nigeria</Text>
        <Text color="#bcb3c6">
          <Link href="mailto: info@carpalar.com">info@carpalar.com</Link>
        </Text>
        <Text color="#bcb3c6">+234 903000 9458</Text>
      </Flex>
      <Flex flexDir="column" color="#FFFFFF" gap="5">
        <Heading fontSize="lg">Links</Heading>
        <Link href="/">
          <Text color="#bcb3c6" className={styles.text}>
            Home
          </Text>
        </Link>

        <Link href="/">
          <Text color="#bcb3c6" className={styles.text}>
            How it works
          </Text>
        </Link>

        <Link href="/">
          <Text color="#bcb3c6" className={styles.text}>
            Explore cars
          </Text>
        </Link>
        <Link href="/">
          <Text color="#bcb3c6" className={styles.text}>
            About us
          </Text>
        </Link>
      </Flex>

      <Flex flexDir="column" gap="8">
        <Heading fontSize="lg" color="#FFFFFF">
          News Letter
        </Heading>
        <Input placeholder="Enter your email" size="sm" color="#bcb3c6" />
        <Flex gap="3">
          <Heading fontSize="xl" mr="5" color="#bcb3c6">
            Follow us
          </Heading>

          <Link href="/https://www.instagram.com/carpalarhq">
            <FaFacebook fontSize="26px" color="#FFFFFF" />
          </Link>

          <Link
            href="https://www.facebook.com/carpalarhq"
            backgroundColor="black"
          >
            <FaInstagram fontSize="26px" color="#FFFFFF" />
          </Link>

          <Link href="">
            <FaWhatsapp fontSize="26px" color="#FFFFFF" />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Footer;
