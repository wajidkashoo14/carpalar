import {
  Box,
  Image,
  Stack,
  Divider,
  Flex,
  Text,
  Tag,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import capsFirst from "../../utils/capsFirst";
import ChakraCarousel from "../ChakraCarousel";
import Accordian from "./Accordian";
import Cards from "./Cards";

export default function Aboutus() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
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
      <Box alignItems="center" p="10" justifyContent="center" textAlign="left">
        <Text textTransform="uppercase" fontSize="40" px="6%">
          About-Us
        </Text>
        <div
          style={{
            width: "200px",
            padding: "1.4px",
            backgroundColor: "#acb7fb",
            marginLeft: "6%",
          }}
        ></div>
        <Flex>
          <Box display="flex" flexDir="column">
            <Text px="10%" py="5" fontSize="20">
              How the adventure ended will be seen anon. Aouda was anxious,
              though she said nothing.
            </Text>
            <Text px="10%" py="5" fontSize="18">
              As for Passepartout, he thought Mr. Fogg’s manoeuvre simply
              glorious. The captain had said “between eleven and twelve knots,”
              and the Henrietta confirmed his prediction. How the adventure
              ended will be seen anon. Aouda was anxious, though she said
              nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre
              simply glorious. The captain had said.
            </Text>
            <Stack direction="row" h="50px" px="10%" py="1rem">
              <Divider orientation="vertical" w="10px" />
              <Text fontSize="20" fontWeight="25">
                During the first days, they went along smoothly enough. The sea
                was not very unpropitious, the wind seemed stationary in the
                north-east.
              </Text>
            </Stack>
            <Text px="10%" py="3rem" fontSize="18">
              As for Passepartout, he thought Mr. Fogg’s manoeuvre simply
              glorious. The captain had said “between eleven and twelve knots,”
              and the Henrietta confirmed his prediction. How the adventure
              ended will be seen anon. Aouda was anxious, though she said
              nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre
              simply glorious. The captain had said.
            </Text>
          </Box>
          <Image src="/homecar.jpg" width={550} height={350} />
        </Flex>
      </Box>
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

      <Cards />
      <Flex gap="20" py="10" bg="#F2F5FB" flexDir="column">
        <Heading
          textTransform="uppercase"
          as="h2"
          fontSize="50"
          // color="#f2f2f2"
          m="auto"
        >
          Our Team
        </Heading>
        <Box bg="black" width="90vw" marginX="auto" borderRadius="10">
          <Container py={8} px={0} maxW="65vw">
            <ChakraCarousel gap={5}>
              {data.slice(5, 15).map((post, index) => (
                <Flex
                  key={index}
                  boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                  justifyContent="space-between"
                  flexDirection="column"
                  overflow="hidden"
                  color="#000"
                  bg="#fff"
                  rounded={5}
                  flex={1}
                  mr={5}
                >
                  <VStack mb={6}>
                    <Image
                      src="/homecar.jpg"
                      height={200}
                      width={350}
                      // layout="responsive"
                    />
                    <Box p="5">
                      <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        w="full"
                        mb="1"
                        as="h3"
                        fontWeight="medium"
                        color="#4258EF"
                      >
                        {capsFirst("Wajid Hussain Kahsoo")}
                      </Heading>
                      <Text fontStyle="italic" mb="3" w="full" color="gray.600">
                        Managing Director
                      </Text>
                      <Divider />

                      <Text mt="10" w="full" color="gray.600">
                        email@example.com
                      </Text>
                    </Box>
                  </VStack>

                  {/* <Flex justifyContent="space-between">
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
                </Flex> */}
                </Flex>
              ))}
            </ChakraCarousel>
          </Container>
        </Box>
      </Flex>
      <Box textAlign="center" my="5rem">
        <Heading
          as="h2"
          color="#000000"
          fontSize="3xl"
          m="auto"
          textTransform="uppercase"
        >
          Our Gallery
        </Heading>
        <Flex
          padding="10"
          flexWrap="wrap"
          gap="10"
          width="100vw"
          justifyContent="center"
        >
          <Box
            width="40%"
            overflow="hidden"
            borderRadius={20}
            bg="tomato"
            height="300px"
          >
            <Image
              objectFit="cover"
              src="/homecar.jpg"
              layout="fixed"
              height={"300px"}
              width={"100%"}
            />
          </Box>
          <Box
            width="20%"
            overflow="hidden"
            borderRadius={20}
            bg="tomato"
            height="300px"
          >
            <Image
              objectFit="cover"
              src="/homecar.jpg"
              layout="fixed"
              height={"300px"}
              width={"100%"}
            />
          </Box>
          <Box
            width="20%"
            overflow="hidden"
            borderRadius={20}
            bg="tomato"
            height="300px"
          >
            <Image
              objectFit="cover"
              src="/homecar.jpg"
              layout="fixed"
              height={"300px"}
              width={"100%"}
            />
          </Box>
          <Box
            width="20%"
            overflow="hidden"
            borderRadius={20}
            bg="tomato"
            height="300px"
          >
            <Image
              objectFit="cover"
              src="/homecar.jpg"
              layout="fixed"
              height={"300px"}
              width={"100%"}
            />
          </Box>
          <Box
            width="20%"
            overflow="hidden"
            borderRadius={20}
            bg="tomato"
            height="300px"
          >
            <Image
              objectFit="cover"
              src="/homecar.jpg"
              layout="fixed"
              height={"300px"}
              width={"100%"}
            />
          </Box>
          <Box
            width="20%"
            overflow="hidden"
            borderRadius={20}
            bg="tomato"
            height="300px"
          >
            <Image
              objectFit="cover"
              src="/homecar.jpg"
              layout="fixed"
              height={"300px"}
              width={"100%"}
            />
          </Box>
          <Box
            width="20%"
            overflow="hidden"
            borderRadius={20}
            bg="tomato"
            height="300px"
          >
            <Image
              objectFit="cover"
              src="/homecar.jpg"
              layout="fixed"
              height={"300px"}
              width={"100%"}
            />
          </Box>
        </Flex>
      </Box>
      <Accordian />
    </Box>
  );
}
