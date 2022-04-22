import { Container, Flex, Heading, Text, Divider, Box } from "@chakra-ui/react";
import React from "react";

function Description() {
  return (
    <Container
      maxW="80vw"
      minH="100vh"
      textAlign="left"
      p="10"
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Heading width="100vw" mb="10">
        Description
      </Heading>
      <Text mb="10" fontSize="lg" width="100%" fontWeight="medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>

      <Text mb="10" fontSize="lg" fontWeight="medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <Box
        display="flex"
        flexDir="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt="2"
          w="100%"
        >
          <Text>Fuel type</Text>
          <Text fontWeight="bold">Gasoline</Text>
        </Flex>
        <Divider width="80%" mx="auto" color="" p="2" />

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt="2"
        >
          <Text>Fuel type</Text>
          <Text fontWeight="bold">Gasoline</Text>
        </Flex>
        <Divider width="80%" mx="auto" color="" p="2" />

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt="2"
        >
          <Text>Fuel type</Text>
          <Text fontWeight="bold">Gasoline</Text>
        </Flex>
        <Divider width="80%" mx="auto" color="" p="2" />

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt="2"
        >
          <Text>Fuel type</Text>
          <Text fontWeight="bold">Gasoline</Text>
        </Flex>
        <Divider width="80%" mx="auto" color="" p="2" />

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt="2"
        >
          <Text>Fuel type</Text>
          <Text fontWeight="bold">Gasoline</Text>
        </Flex>
        <Divider width="80%" mx="auto" color="" p="2" />

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt="2"
        >
          <Text>Fuel type</Text>
          <Text fontWeight="bold">Gasoline</Text>
        </Flex>
        <Divider width="80%" mx="auto" color="" p="2" />
      </Box>

      {/* second box start */}

      <Box
        display="flex"
        justifyContent="space-between"
        width="70%"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Flex
          display="flex"
          //   justifyContent="center"
          width="60%"
          mt="10"

          //   alignItems="flex-start"
        >
          '
          <Heading as="h5" fontSize="md" width="10rem">
            Standard features include
          </Heading>
          <Heading as="h5" fontSize="md" ml="2.5rem" width="10rem">
            Available features include
          </Heading>
        </Flex>

        <Box
          display="flex"
          justifyContent="space-between"
          width="60%"
          mt="10"
          flexDir="column"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="60%"
            mt="2"
          >
            <Text>Fuel type</Text>
            <Text fontWeight="bold">Gasoline</Text>
          </Flex>
          <Divider width="80%" mx="auto" color="" p="2" />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="60%"
            mt="2"
          >
            <Text>Fuel type</Text>
            <Text fontWeight="bold">Gasoline</Text>
          </Flex>
          <Divider width="80%" mx="auto" color="" p="2" />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="60%"
            mt="2"
          >
            <Text>Fuel type</Text>
            <Text fontWeight="bold">Gasoline</Text>
          </Flex>
          <Divider width="80%" mx="auto" color="" p="2" />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="60%"
            mt="2"
          >
            <Text>Fuel type</Text>
            <Text fontWeight="bold">Gasoline</Text>
          </Flex>
          <Divider width="80%" mx="auto" color="" p="2" />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="60%"
            mt="2"
          >
            <Text>Fuel type</Text>
            <Text fontWeight="bold">Gasoline</Text>
          </Flex>
          <Divider width="80%" mx="auto" color="" p="2" />
        </Box>
      </Box>

      <Box>
        <Heading>Reviews</Heading>
      </Box>
    </Container>
  );
}

export default Description;
