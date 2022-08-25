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
      <Heading
        as="h5"
        fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}
        textTransform="capitalize"
        size="2xl"
      >
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
        minW="77vw"
        maxW="90vw"
        color="black"
        justifyContent="space-between"
        textAlign="center"
        flexDir={{ base: "column", md: "row" }}
        mt="8"
      >
        <Box
          m="4"
          width={notSmallerScreen ? "100%" : "35%"}
          mb={notSmallerScreen ? "20" : "inherit"}
          data-aos="zoom-in-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
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
            p="10"
            py="16"
            bg="white"
            mt="4"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            height={notSmallerScreen ? "50vh" : "45vh"}
          >
            <Image
              mb="40"
              src="/formfilling.png"
              height={120}
              width={120}
              alt="salary"
            />
            <Text fontWeight="medium" mt="10">
              Fill in the application form
            </Text>
          </Flex>
        </Box>
        <Box
          m="4"
          width={notSmallerScreen ? "100%" : "35%"}
          mb={notSmallerScreen ? "20" : "inherit"}
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <Image src="/number-2.png" height={50} width={50} alt="salary" />
          <Flex
            borderRadius="5"
            p="10"
            py="16"
            bg="white"
            mt="4"
            flexDir="column"
            height={notSmallerScreen ? "50vh" : "45vh"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              src="/icons/fill.svg"
              height={120}
              width={120}
              alt="salary"
            />
            <Text fontWeight="medium" mt="10">
              Get Assessed and verified
            </Text>
          </Flex>
        </Box>
        <Box
          m="4"
          width={notSmallerScreen ? "100%" : "35%"}
          mb={notSmallerScreen ? "20" : "inherit"}
          data-aos="zoom-in-right"
          data-aos-delay="200"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
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
            py="16"
            mt="4"
            bg="white"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            height={notSmallerScreen ? "50vh" : "45vh"}
          >
            <Image
              mb="40"
              src="/icons/drive.svg"
              height={150}
              width={220}
              alt="salary"
            />
            <Text fontWeight="medium">Pay & Pick up your car!</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
