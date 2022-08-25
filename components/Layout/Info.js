import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
// import Singlecardinfo from "./Singlecardinfo";

function Info() {
  const router = useRouter();
  const [notSmallerScreen] = useMediaQuery("(min-width:768px)");
  return (
    <Container
      maxW="100%"
      height={{ base: "220vh", md: "100vh" }}
      bgColor="white"
      mx={{ base: "2", md: "5", lg: "8" }}
    >
      <Box
        display={{ base: "block", md: "flex" }}
        px={{ base: "0", md: "10" }}
        py={{ base: "4", md: "4", lg: "10" }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          gap="5"
          width={{ base: "100%", md: "100%", lg: "50%" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <Heading
            textAlign="center"
            fontSize={{ base: "2xl", md: "3xl" }}
            textTransform="uppercase"
            maxW="100%"
            w={{ base: "100%", md: "80%" }}
            mx="auto"
            my={{ base: "0", md: "-2.7rem" }}
            letterSpacing="1px"
            color="#4268E3"
          >
            easy finance facilities with carpalar
          </Heading>
          <Text
            mt="10"
            width={{ base: "90%", md: "80%" }}
            fontSize="20"
            mx="auto"
            letterSpacing="1px"
            textAlign="left"
          >
            We understand how much an individual strive to purchase a vehicle.
            With Carpalar, No hefty down payment of vehicles. Start driving as
            private hire, earn fare to settle your Drive-to-Own payments weekly
            with ease.
          </Text>
          <Text
            mt="6"
            width="80%"
            fontSize="20"
            mx="auto"
            letterSpacing="1px"
            textAlign="left"
          >
            Get started by subscribing to our Drive-to-own plan
          </Text>
          <Button
            my={5}
            className="primaryButton"
            backgroundColor="#4268E3"
            _hover={{ backgroundColor: "#4268E3" }}
            _focus={{ outline: "none" }}
            color="white"
            width="7rem"
            mx="auto"
            fontWeight="400"
            onClick={(e) => {
              router.push("/explore");
            }}
          >
            Get now
          </Button>
        </Flex>

        <Flex
          px={{ base: "0", md: "20" }}
          flexWrap="wrap"
          flexDir={{ base: "column", md: "row" }}
          width={{ base: "98vw", md: "50vw" }}
          gap="30"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          mx={{ base: "4" }}
        >
          <Flex
            w={{ base: "90%", md: "100%", lg: "100%" }}
            gap="5"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box
              position="relative"
              // boxSize="20%"
              minH="30vh"
              w={{ base: "90%", md: "100%" }}
              // m="5"
              boxShadow="lg"
              // mb="5"
              // mt="5"
              padding="5"
              borderRadius="10"
            >
              <Image
                src="/payment-method.png"
                width={120}
                height={120}
                alt="payment method"
                backgroundPosition="center"
                mx="auto"
              />
              <Box
                position="absolute"
                width="100%"
                textAlign="center"
                bottom="0"
                left="0"
                as="h4"
                bgColor="#4268E3"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
                w={{ base: "100%", md: "100%" }}
              >
                <Text mt="4" color="white">
                  Flexible weekly payment plan
                </Text>
              </Box>
            </Box>
            <Box
              position="relative"
              // boxSize=""
              // minW={notSmallerScreen ? "45%" : "100%"}
              w={{ base: "90%", md: "100%" }}
              minH="30vh"
              // mr="5"
              // mt="5"
              boxShadow="lg"
              // mb="5"
              padding="5"
              borderRadius="10"
            >
              <Image
                src="/salary.png"
                width={120}
                height={120}
                alt="payment method"
                mx="auto"
              />
              <Box
                position="absolute"
                width="100%"
                textAlign="center"
                bottom="0"
                left="0"
                color="white"
                as="h4"
                bgColor="#4268E3"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
              >
                <Text mt="4">Affordable and low deposit</Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            w={{ base: "90%", md: "100%" }}
            gap="5"
            mt="2xl"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box
              position="relative"
              // boxSize="280px"
              w={{ base: "90%", md: "100%" }}
              // mr="5"
              // mt="5"
              boxShadow="lg"
              // mb="5"
              minH="30vh"
              padding="5"
              borderRadius="10"
            >
              <Image
                src="/interest.png"
                width={120}
                height={120}
                alt="payment method"
                mx="auto"
              />
              <Box
                position="absolute"
                width="100%"
                textAlign="center"
                bottom="0"
                left="0"
                color="white"
                as="h4"
                bgColor="#4268E3"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
              >
                <Text mt="4">No interest rate</Text>
              </Box>
            </Box>
            <Box
              position="relative"
              // boxSize="280px"
              w={{ base: "90%", md: "100%" }}
              // mr="5"
              // mt="5"
              boxShadow="lg"
              minH="30vh"
              // mb="5"
              padding="5"
              borderRadius="10"
            >
              <Image
                src="/deal.png"
                width={120}
                height={120}
                alt="payment method"
                mx="auto"
              />
              <Box
                position="absolute"
                width="100%"
                textAlign="center"
                bottom="0"
                left="0"
                color="white"
                as="h4"
                bgColor="#4268E3"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
              >
                <Text mt="4">Access to a car</Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default Info;
