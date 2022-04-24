import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import Whycarparlarcard from "./Whycarparlarcard";
import { GiReceiveMoney } from "react-icons/gi";
function Whycarpalar() {
  return (
    <Flex bg="#F3F4F6" flexDir="column" justifyContent="center" py="20">
      <Heading mb="6rem" as="h3" size="2xl" textAlign="center">
        WHY CHOOSE CARPALAR
      </Heading>
      <Container
        px="10"
        py="5"
        pb="16rem"
        maxW="100%"
        minH="100vh"
        display="flex"
        gap="8"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Flexible weekly payment plan"
        />
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="No Collateral, No worries. No hidden charges"
        />
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content={"Affordable & Low Deposit"}
        />
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="No interest rate"
        />
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Access to a Car"
        />
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Compressive Insurance"
        />
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="24 Hours Support"
        />
        <Whycarparlarcard
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Vehicle tracking"
        />
      </Container>
    </Flex>
  );
}

export default Whycarpalar;
