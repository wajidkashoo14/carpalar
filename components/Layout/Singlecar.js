import {
  Box,
  Flex,
  Stack,
  Text,
  Tag,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import capsFirst from "../../utils/capsFirst";
import ChakraCarousel from "../ChakraCarousel";

export default function SIngleCar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <Flex justifyContent="space-between" p="40">
      <Stack>
        <Heading
          as="h2"
          size="2xl"
          textTransform="uppercase"
          fontWeight="bold"
          mb="2"
        >
          Mustang B3 aouf
        </Heading>
        <Text
          fontSize="30"
          width="fit-content"
          bgColor="black"
          color="#fff"
          p="3"
          mb="6"
          fontWeight="bolder"
        >
          $305,000
        </Text>
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Mileage:&nbsp;</Text>
          <Text color="gray.600">25 000 km</Text>
        </Flex>{" "}
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Transmission:&nbsp;</Text>
          <Text color="gray.600">Manual</Text>
        </Flex>
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Color:&nbsp;</Text>
          <Text color="gray.600">Black</Text>
        </Flex>
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Body:&nbsp;</Text>
          <Text color="gray.600">Hatchback</Text>
        </Flex>
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Fuel:&nbsp;</Text>
          <Text color="gray.600">Gasoline</Text>
        </Flex>
        <hr />
        <Button
          width="fit-content"
          variant="solid"
          className="primaryButton"
          backgroundColor="#4258EF"
          _hover={{ backgroundColor: "#273edc" }}
          _focus={{ outline: "none" }}
          color="white"
        >
          BUY NOW
        </Button>
      </Stack>
      {/* <Image src="/homecar.jpg" width={550} height={350} />I */}
      <Container py={8} px={0} maxW="50vw">
        <ChakraCarousel gap={32}>
          {data.slice(5, 15).map((post, index) => (
            <Flex
              key={index}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              color="gray.300"
              bg="base.d100"
              rounded={5}
              flex={1}
              p={5}
            >
              <VStack mb={6}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="left"
                  w="full"
                  mb={2}
                >
                  {capsFirst(post.title)}
                </Heading>
                <Text w="full">{capsFirst(post.body)}</Text>
              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>
                  <Tag size="sm" variant="outline" colorScheme="green">
                    User: {post.userId}
                  </Tag>
                  <Tag size="sm" variant="outline" colorScheme="cyan">
                    Post: {post.id - 5}
                  </Tag>
                </HStack>
                <Button
                  onClick={() => alert(`Post ${post.id - 5} clicked`)}
                  colorScheme="green"
                  fontWeight="bold"
                  color="gray.900"
                  size="sm"
                >
                  More
                </Button>
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
    </Flex>
  );
}
