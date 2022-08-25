import {
  Container,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
// import Image from "next/image";
import React from "react";

function Aboutcarpalar() {
  const router = useRouter();
  return (
    <Box width="100%" mt="20">
      <Flex
        width={{ base: "95vw", md: "80vw" }}
        m="auto"
        h={{ base: "100vh", md: "100vh", lg: "70vh" }}
        display={{ base: "block", md: "block", lg: "flex" }}
      >
        <Image
          alt="car"
          style={{ borderRadius: "50px" }}
          src="/homecar.jpg"
          h={{ base: "20rem", md: "30rem" }}
          w={{ base: "100%", md: "100%", lg: "40vw" }}
          //   layout="fixed"
        />
        <Flex flexDir="column" px={{ base: "1rem", md: "2rem", lg: "5rem" }}>
          <Heading
            fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }}
            mb={{ base: "0", md: "3", lg: "7" }}
            py={{ base: "6", md: "5", lg: "3" }}
            textTransform="uppercase"
            textAlign="left"
          >
            About Carpalar
          </Heading>

          <Text
            textAlign="justify"
            fontSize={{ base: "md", md: "lg" }}
            color="#1b171f"
            fontWeight={{ base: "400", md: "500" }}
          >
            Carpalar is a genuine and notable digital car leasing brand that
            aims at ensuring ownership of automobiles in the most convenient
            way. Simply refer to Carpalar as a financial technology brand that
            provides cars and buses to interested individuals or brands via hire
            purchase. We help you secure an automobile of your choice with the
            deal of making an affordable down payment and spreading the
            remaining payment across 12-24 months. Carpalar provides neutral
            finance solutions for individuals and businesses looking to own a
            car
          </Text>
          <Button
            onClick={(e) => {
              router.push("/aboutus");
            }}
            my={10}
            className="primaryButton"
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            w="fit-content"
          >
            Know More
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Aboutcarpalar;
