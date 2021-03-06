import React from "react";
import { Container, Heading, Flex, Image, Box, Text } from "@chakra-ui/react";

function Carbanner() {
  return (
    <Container maxW="100%" height="60vh" bg="#1E1E1E" my="0">
      <Heading
        textTransform="uppercase"
        py="16"
        as="h2"
        size="xl"
        color="white"
        fontWeight="400"
        textAlign="center"
      >
        Find your dream car
      </Heading>

      <Flex justifyContent="center" gap="5rem">
        <Box>
          <Image src="/cars/coupe.svg" boxSize="120px" />
          <Text
            mt="-5"
            fontSize="1xl"
            textTransform="uppercase"
            color="#93a0be"
          >
            cabriolet
          </Text>
        </Box>
        <Box>
          <Image
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
            Convertible
          </Text>
        </Box>
        <Box>
          <Image
            src="/cars/hatchback.svg"
            boxSize="120px"
            // style={{ transform: "rotate(270deg)" }}
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

        <Box>
          <Image
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
      </Flex>
    </Container>
  );
}

export default Carbanner;
