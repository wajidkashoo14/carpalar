import React from "react";
import {
  Container,
  Flex,
  Box,
  Button,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function NavigationItems() {
  const router = useRouter();
  return (
    <Container
      maxW="15%"
      display="flex"
      p="3 O"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      backgroundColor="#E9F3FC"
      height="85vh"
      marginTop="6%"
      borderRight=".5px solid #DCDCDC"
    >
      <Flex flexDir="column" marginTop="1rem" gap="3" alignItems={"flex-start"}>
        <Heading fontSize="1.5rem" mb="1rem">
          Dashboard
        </Heading>
        <Button
          onClick={(e) => {
            router.push("/user/Applications");
          }}
          textAlign="start"
          fontSize="1.2rem"
        >
          Applications
        </Button>
        <Button
          onClick={(e) => {
            router.push("/user/myproducts");
          }}
          textAlign="start"
          fontSize="1.2rem"
        >
          Orders
        </Button>

        <Button
          onClick={(e) => {
            router.push("/user/profile");
          }}
          textAlign="start"
          fontSize="1.2rem"
        >
          Profile
        </Button>
      </Flex>
      <Button
        onClick={(e) => {
          router.push("/user/Applications");
        }}
        mb="4"
        varaint="outline"
        colorScheme="red"
      >
        Logout
      </Button>
    </Container>
  );
}

export default NavigationItems;
