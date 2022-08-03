import { Flex } from "@chakra-ui/react";
import React from "react";
import Singlecarcard from "./Singlecarcard";

function Explore() {
  return (
    <Flex
      w="80vw"
      maxH="108vh"
      bg="#fff"
      mb="3rem"
      flexWrap="wrap"
      overflowY="scroll"
      scrl
      justifyContent="space-around"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          color: "red",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "24px",
        },
      }}
    >
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
      <Singlecarcard />
    </Flex>
  );
}

export default Explore;
