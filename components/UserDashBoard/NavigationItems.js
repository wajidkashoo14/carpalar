import React from "react";
import {
  Container,
  Flex,
  Box,
  Button,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function NavigationItems() {
  const router = useRouter();
  return (
    <Box
      width="15vw"
      display="flex"
      p="1rem"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      backgroundColor="#E9F3FC"
      height="85vh"
      marginTop="6%"
      borderRight=".5px solid #DCDCDC"
    >
      <Flex flexDir="column" marginTop="1rem" gap="3" alignItems={"flex-start"}>
        <Text
          bgColor="#4258EF"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          cursor={"pointer"}
          onClick={() => router.push("/user/dashboard")}
        >
          Dashboard
        </Text>
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
            router.push("/user/orders");
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
    </Box>
  );
}

export default NavigationItems;
