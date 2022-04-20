import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

export default function About() {
  const [notSmallerScreen] = useMediaQuery("(min-width:768px)");

  return (
    <Flex
      textAlign="center"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      minH="55vh"
      py="5%"
    >
      <Heading
        as="h3"
        size="2xl"
        mb="3"
        pt={notSmallerScreen ? "2" : "10%"}
        textTransform="uppercase"
        textAlign="center"
      >
        About carpalar
      </Heading>
      <div
        style={{
          width: "200px",
          padding: "1.4px",
          backgroundColor: "#acb7fb",
        }}
      ></div>

      <Text
        mt="10"
        fontSize="large"
        color="gray.600"
        px={notSmallerScreen ? "18%" : "10%"}
      >
        Carpalar is a genuine and notable digital car leasing brand that aims at
        ensuring ownership of automobiles in the most convenient way. Simply
        refer to Carpalar as a financial technology brand that provides cars and
        buses to interested individuals or brands via hire purchase. We help you
        secure an automobile of your choice with the deal of making an
        affordable down payment and spreading the remaining payment across 12-24
        months. Carpalar provides neutral finance solutions for individuals and
        businesses looking to own a car
      </Text>
    </Flex>
  );
}
