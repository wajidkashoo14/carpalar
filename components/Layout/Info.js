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
// import Singlecardinfo from "./Singlecardinfo";

function Info() {
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
            bgGradient="linear(to right, #ffffff, #abbaab)"
            bgClip="text"
            fontSize="5xl"
            textAlign="center"
            fontWeight="700"
            letterSpacing="5px"
          >
            Carparlar
          </Heading>
          <Heading
            textAlign="center"
            fontSize="lg"
            textTransform="uppercase"
            maxW="100%"
            width="40%"
            mx="auto"
            my="-2.5rem"
          >
            easy finance facilities with carpalar
          </Heading>
          <Text
            mt="10"
            width="50%"
            fontSize="16px"
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
            width="50%"
            fontSize="16px"
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
          >
            Get now
          </Button>
        </Flex>

        <Flex px="50" flexWrap="wrap" flexDir="row" width="50%">
          <Flex>
            <Box
              position="relative"
              boxSize="280px"
              minW={notSmallerScreen ? "45%" : "100%"}
              m="5"
              boxShadow="lg"
              mb="5"
              mt="5"
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
                color="white"
                as="h4"
                bgColor="blue"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
              >
                <Text mt="4">Flexible weekly payment plan</Text>
              </Box>
            </Box>
            <Box
              position="relative"
              boxSize="280px"
              minW={notSmallerScreen ? "45%" : "100%"}
              mr="5"
              mt="5"
              boxShadow="lg"
              mb="5"
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
                bgColor="blue"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
              >
                <Text mt="4">Affordable and low deposit</Text>
              </Box>
            </Box>
          </Flex>
          <Flex>
            <Box
              position="relative"
              boxSize="280px"
              minW={notSmallerScreen ? "45%" : "100%"}
              mr="5"
              mt="5"
              boxShadow="lg"
              mb="5"
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
                bgColor="blue"
                height="4rem"
                borderBottomLeftRadius="10"
                borderBottomRightRadius="10"
              >
                <Text mt="4">No interest rate</Text>
              </Box>
            </Box>
            <Box
              position="relative"
              boxSize="280px"
              minW={notSmallerScreen ? "45%" : "100%"}
              mr="5"
              mt="5"
              boxShadow="lg"
              mb="5"
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
                bgColor="blue"
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
