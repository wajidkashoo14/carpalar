import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import Whycarparlarcard from "./Whycarparlarcard";
import { GiReceiveMoney } from "react-icons/gi";
function Whycarpalar() {
  return (
    <Flex
      bg="#F3F4F6"
      flexDir="column"
      justifyContent="center"
      py="20"
      mt={{ base: "7rem" }}
    >
      <Heading
        mb="6rem"
        as="h3"
        fontSize={{ base: "2xl", md: "5xl" }}
        textAlign="center"
      >
        WHY CHOOSE CARPALAR
      </Heading>
      <Container
        px={{ base: "0", md: "8rem" }}
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
          delay={0}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Flexible weekly payment plan"
        />
        <Whycarparlarcard
          delay={100}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="No Collateral, No worries. No hidden charges"
        />
        <Whycarparlarcard
          delay={200}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content={"Affordable & Low Deposit"}
        />
        <Whycarparlarcard
          delay={300}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="No interest rate"
        />
        <Whycarparlarcard
          delay={400}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Access to a Car"
        />
        <Whycarparlarcard
          delay={500}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Compressive Insurance"
        />
        <Whycarparlarcard
          delay={600}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="24 Hours Support"
        />
        <Whycarparlarcard
          delay={800}
          icon={<GiReceiveMoney fontSize="80px" color="#4258EF" />}
          content="Vehicle tracking"
        />
      </Container>
    </Flex>
  );
}

export default Whycarpalar;
