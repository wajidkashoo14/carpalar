import { Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Productreview() {
  return (
    <Container width="50vh" minH="50vh">
      <Flex flexDir="column" gap="5" padding="5">
        <Flex justifyContent="center" alignItems="center">
          <Image
            src="./homecar.jpg"
            height="5rem"
            width="5rem"
            borderRadius="50%"
          />
          <Text> Wajid Hussain</Text>
        </Flex>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </Text>
      </Flex>
    </Container>
  );
}

export default Productreview;
