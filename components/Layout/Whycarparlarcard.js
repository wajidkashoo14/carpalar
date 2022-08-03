import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Whycarparlarcard({ icon, content }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      p={5}
      boxSize="16rem"
      bg="#fff"
      boxShadow={"sm"}
      gap="6"
      rounded={10}
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-10px)",
        transition: "all 0.2s ease-in-out",
        // bg: "#4258EF",
        // color: "#fff",
      }}
    >
      {/* <Text boxSize="80px" rounded="50%" bg="red" textAlign="center"> */}
      {icon}
      {/* </Text> */}
      <Text
        fontSize="sm"
        textAlign="center"
        fontWeight="medium"
        textTransform="capitalize"
      >
        {content}
      </Text>
    </Flex>
  );
}

export default Whycarparlarcard;
