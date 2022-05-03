import {
  Container,
  Flex,
  Heading,
  Text,
  Input,
  Box,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import React from "react";
import Singlecarcard from "./Singlecarcard";

function Explore() {
  return (
    <Container maxW="100%" minH="100vh" p="5" display="flex" mb="10rem">
      <Flex
        w="20%"
        h="80vh"
        bg="#fff"
        mr="3"
        px="3"
        flexDir="column"
        boxShadow="2xl"
        borderRadius="15px"
        position="fixed"
      >
        <Heading
          fontWeight="500"
          textTransform="uppercase"
          fontSize="22px"
          my="1"
          mt="4"
        >
          Filter vehicles
        </Heading>
        <Box>
          <Text my="1" fontSize="16px" textTransform="uppercase">
            keyword search?
          </Text>
          <Select variant="filled" placeholder="Select Make">
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Text my="1" fontSize="16px" textTransform="uppercase">
            Missing Manufacturer
          </Text>
          <Select variant="filled" placeholder="Select Make">
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Text my="1" fontSize="16px" textTransform="uppercase">
            missing model
          </Text>
          <Select variant="filled" placeholder="Select Make">
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Text my="1" fontSize="16px" textTransform="uppercase">
            year
          </Text>
          <Select variant="filled" placeholder="Select Make">
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Text my="1" fontSize="16px" textTransform="uppercase">
            engine
          </Text>
          <Select variant="filled" placeholder="Select Make">
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Text my="1" fontSize="16px" textTransform="uppercase">
            transmission
          </Text>
          <Select variant="filled" placeholder="Select Make">
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
      <Flex
        w="80%"
        minH="100vh"
        bg="#fff"
        flexWrap="wrap"
        ml="20%"
        justifyContent="space-around"
      >
        <Singlecarcard />
        <Singlecarcard />
        <Singlecarcard />
        <Singlecarcard />
        <Singlecarcard />
        <Singlecarcard />
      </Flex>
    </Container>
  );
}

export default Explore;
