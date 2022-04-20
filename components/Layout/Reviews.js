import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

export default function Reviews() {
  const [notSmallerScreen] = useMediaQuery("(max-width:768px)");

  return (
    <Box
      mt="5%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="7%"
      color="white"
      bg="black"
      minH="90vh"
      pb="60"
    >
      <Heading
        color="#4258ef"
        as="h5"
        textTransform="uppercase"
        size="2xl"
        mb="5%"
        textAlign="center"
      >
        What people are saying
      </Heading>

      <Flex
        maxW="80vw"
        color="black"
        // justifyContent="space-evenly"
        flexDir={notSmallerScreen ? "column" : "row"}
      >
        <Flex
          width={notSmallerScreen ? "100%" : "25vw"}
          height={notSmallerScreen ? "fit-content" : "40vh"}
          mt="10"
          bg="white"
          borderRadius="5"
          p="5"
          flexDir="column"
          alignItems="flex-start"
          m="4"
          backgroundColor="#C4C4C4"
        >
          <Flex alignItems="center">
            <Avatar size="lg" name="Segun Adebayo" src="/profile/man2.png" />
            <Box ml="5" w={notSmallerScreen ? "90%" : "60%"}>
              <Text>Wk</Text>
            </Box>
          </Flex>
          <Text
            mt="5"
            fontWeight={notSmallerScreen ? "medium" : "medium"}
            fontStyle="italic"
          >
            {`“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”`}
          </Text>
        </Flex>
        <Flex
          width={notSmallerScreen ? "100%" : "25vw"}
          height={notSmallerScreen ? "fit-content" : "40vh"}
          mt="10"
          bg="white"
          borderRadius="5"
          p="5"
          flexDir="column"
          alignItems="flex-start"
          m="4"
        >
          <Flex alignItems="center">
            <Avatar size="lg" name="Segun Adebayo" src="/profile/man2.png" />
            <Box ml="5" w={notSmallerScreen ? "90%" : "60%"}>
              <Text>Wk</Text>
            </Box>
          </Flex>
          <Text
            mt="5"
            fontWeight={notSmallerScreen ? "medium" : "medium"}
            fontStyle="italic"
          >
            {`“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”`}
          </Text>
        </Flex>
        <Flex
          width={notSmallerScreen ? "100%" : "25vw"}
          height={notSmallerScreen ? "fit-content" : "40vh"}
          mt="10"
          bg="white"
          borderRadius="5"
          p="5"
          flexDir="column"
          alignItems="flex-start"
          m="4"
          backgroundColor="#C4C4C4"
        >
          <Flex alignItems="center">
            <Avatar size="lg" name="Segun Adebayo" src="/profile/man2.png" />
            <Box ml="5" w={notSmallerScreen ? "90%" : "60%"}>
              <Text>Mr Khan</Text>
            </Box>
          </Flex>
          <Text
            mt="5"
            fontWeight={notSmallerScreen ? "medium" : "medium"}
            fontStyle="italic"
          >
            {`“The product is second to none! It’s a great opportunity
						to generate daily income. Since I partnered with Moove,
						I have been able to gain financial independence.”`}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
