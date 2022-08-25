import React from "react";
import { Container, Heading, Flex, Image, Box, Text } from "@chakra-ui/react";

function Carbanner() {
  return (
    <Container
      maxW="100%"
      height={{ base: "160vh", md: "60vh" }}
      bg="#1E1E1E"
      my="0"
    >
      <Heading
        textTransform="uppercase"
        py="16"
        as="h2"
        size="xl"
        color="white"
        fontWeight="400"
        textAlign="center"
        data-aos="fade-up"
        data-aos-offset="30"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        Find your dream car
      </Heading>

      <Flex
        justifyContent="center"
        alignItems="center"
        gap={{ base: "3rem", md: "5rem" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="100"
        >
          <Image
            alt="car-icon"
            src="/cars/saloon.svg"
            boxSize="120px"
            style={{ scale: "1.1" }}
          />
          <Text
            mt="-5"
            fontSize="1xl"
            textTransform="uppercase"
            color="#93a0be"
          >
            Saloon
          </Text>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <Image
            alt="car-icon"
            src="/cars/cabriolet.svg"
            boxSize="120px"
            color="#8897b7"
            style={{ transform: "rotate(360deg)" }}
          />
          <Text
            mt="-5"
            fontSize="1xl"
            textTransform="uppercase"
            color="#93a0be"
          >
            Tri Cycle
          </Text>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="100"
        >
          <Image
            alt="car-icon"
            src="/cars/hatchback.svg"
            boxSize="120px"
            style={{ transform: "scaleX(-1)" }}
          />
          <Text
            mt="-5"
            fontSize="1xl"
            textTransform="uppercase"
            color="#93a0be"
          >
            Mini car
          </Text>
        </Box>

        <Box
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-delay="100"
          data-aos-once="false"
        >
          <Image
            alt="car-icon"
            src="/cars/suv.svg"
            boxSize="120px"
            style={{ transform: "rotate(360deg)" }}
          />
          <Text
            mt="-5"
            fontSize="1xl"
            textTransform="uppercase"
            color="#93a0be"
            mx="10"
          >
            Suv
          </Text>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <Image mt="-2" alt="car-icon" src="/cars/motor.svg" boxSize="120px" />
          <Text
            mt="-2"
            fontSize="1xl"
            textTransform="uppercase"
            color="#93a0be"
          >
            Motorcycle
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default Carbanner;
