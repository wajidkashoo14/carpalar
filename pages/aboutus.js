import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Aboutus() {
  return (
    <Box>
      <Flex flexDir="column" alignItems="center" p="10" minH="40vh">
        <Heading
          textAlign="center"
          size="4xl"
          textTransform="capitalize"
          as="h1"
          width="100%"
          mt="10"
        >
          Get Your Car Now
        </Heading>
        <Text fontSize="2xl" my="2" color="blackAlpha.600">
          CHOOSE FROM HUNDREDS OF STYLISH CARS
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color="#4258EF">
          Explore Services
        </Text>
      </Flex>
      <Flex alignItems="center" p="10" flexDir="column" textAlign="center">
        <Text textTransform="uppercase" fontSize="40">
          About-Us
        </Text>
        <div
          style={{
            width: "200px",
            padding: "1.4px",
            backgroundColor: "#acb7fb",
          }}
        ></div>
        <Text px="10%" py="5" fontSize="20">
          Carpalar is a genuine and notable digital car leasing brand that aims
          at ensuring ownership of automobiles in the most convenient way.
          Simply refer to Carpalar as a financial technology brand that provides
          cars and buses to interested individuals or brands via hire purchase.
          We help you secure an automobile of your choice with the deal of
          making an affordable down payment and spreading the remaining payment
          across 12-24 months. Carpalar provides neutral finance solutions for
          individuals and businesses looking to own a car.
        </Text>
      </Flex>
      <Flex alignItems="center" p="10" flexDir="column" textAlign="center">
        <Text textTransform="uppercase" fontSize="40">
          Drive-to-own
        </Text>
        <div
          style={{
            width: "200px",
            padding: "1.4px",
            backgroundColor: "#acb7fb",
          }}
        ></div>
        <Text px="10%" py="5" fontSize="20">
          {`Carpalar’s main product is her ‘Drive-to-own’ service. Our
					utmost goal is to create ownership opportunities to
					individuals who are interested in securing automobiles for
					personal or business purposes but are financially incapable.
					Our brand’s identity differs uniquely as consumers of our
					product are expected to pay just an affordable percentage of
					the fleet vehicle value before commencing usage of vehicle.
					After the initial payment, the remaining payment is spread
					across a stipulated period as agreed between our company and
					the customer. Upon payment completion, the customer becomes
					entitled to the ownership of the vehicle. However, a
					customer is also permitted to opt for early settlement of
					repayment period.`}
        </Text>
      </Flex>
    </Box>
  );
}
