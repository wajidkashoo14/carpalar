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
    <Container maxW="100%" height="100vh" bgColor="white" mx="8">
      <Box display="flex" px="10" py="10">
        <Flex
          flexDirection="column"
          justifyContent="center"
          gap="5"
          width="50%"
        >
          <Heading
            textAlign="center"
            fontSize="25"
            textTransform="uppercase"
            maxW="100%"
            w="60%"
            mx="auto"
            my="-2.7rem"
            letterSpacing="1px"
            color="#4258EF"
          >
            easy finance facilities with carpalar
          </Heading>
          <Text
            mt="10"
            width="80%"
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
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            width="7rem"
            mx="auto"
            fontWeight="400"
            onClick={(e) => {
              router.push("/signup");
            }}
          >
            Get now
          </Button>
        </Flex>

        <Flex px="20" flexWrap="wrap" flexDir="row" width="50vw" gap="30">
          <Flex w="100%" gap="5">
            <Box
              position="relative"
              // boxSize="20%"
              minH="30vh"
              w={notSmallerScreen ? "50%" : "100%"}
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
                bgColor="#273edc"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
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
              w={notSmallerScreen ? "50%" : "100%"}
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
                bgColor="#273edc"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
              >
                <Text mt="4">Affordable and low deposit</Text>
              </Box>
            </Box>
          </Flex>
          <Flex w="100%" gap="5" mt="2xl">
            <Box
              position="relative"
              // boxSize="280px"
              w={notSmallerScreen ? "50%" : "100%"}
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
                bgColor="#273edc"
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
              w={notSmallerScreen ? "50%" : "100%"}
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
                bgColor="#273edc"
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
