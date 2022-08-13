import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
export default function Howitworks() {
  const [notSmallerScreen] = useMediaQuery("(max-width:768px)");

  return (
    <Box
      my="5%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="5%"
      color="white"
      bg="black"
      id="howitworks"
      scrollBehavior="smooth"
    >
      <Heading as="h5" textTransform="capitalize" size="2xl">
        How it works
      </Heading>
      <Text
        mt="2"
        my="30"
        fontSize={notSmallerScreen ? "20" : "20"}
        textAlign="center"
      >
        Three simple steps with no hasle
      </Text>
      <Flex
        maxW="70vw"
        color="black"
        justifyContent="space-between"
        textAlign="center"
        flexDir={notSmallerScreen ? "column" : "row"}
        mt="20"
      >
        <Box
          width={notSmallerScreen ? "100%" : "25%"}
          mb={notSmallerScreen ? "20" : "inherit"}
        >
          <Image
            mb="40"
            src="/number-one.png"
            height={50}
            width={50}
            alt="salary"
          />
          <Flex
            borderRadius="5"
            p="5"
            bg="white"
            flexDir="column"
            alignItems="center"
            height={notSmallerScreen ? "50vh" : "35vh"}
          >
            <Image
              mb="40"
              src="/formfilling.png"
              height={120}
              width={120}
              alt="salary"
            />
            <Text fontWeight="medium" fontSize="large" mt="10">
              Fill in the application form
            </Text>
          </Flex>
        </Box>
        <Box
          width={notSmallerScreen ? "100%" : "25%"}
          mb={notSmallerScreen ? "20" : "inherit"}
        >
          <Image
            mb="40"
            src="/number-2.png"
            height={50}
            width={50}
            alt="salary"
          />
          <Flex
            borderRadius="5"
            p="10"
            bg="white"
            flexDir="column"
            height={notSmallerScreen ? "50vh" : "35vh"}
            alignItems="center"
          >
            <Image
              mb="40"
              src="/verified.png"
              height={150}
              width={150}
              alt="salary"
            />
            <Text fontWeight="medium" mt="10">
              Get Assessed and verified
            </Text>
          </Flex>
        </Box>
        <Box
          width={notSmallerScreen ? "100%" : "25%"}
          mb={notSmallerScreen ? "20" : "inherit"}
        >
          <Image
            mb="40"
            src="/number-3.png"
            height={50}
            width={50}
            alt="salary"
          />
          <Flex
            borderRadius="5"
            p="10"
            bg="white"
            flexDir="column"
            alignItems="center"
            height={notSmallerScreen ? "50vh" : "35vh"}
          >
            <Image
              mb="40"
              src="/pay.png"
              height={200}
              width={200}
              alt="salary"
            />
            <Text fontWeight="medium" mt="10">
              Pay & Pick up your car!
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
