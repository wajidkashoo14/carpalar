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
      <Flex w="20%" minH="100vh" bg="#fff" mr="3" px="2" flexDir="column">
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

        <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]} my="5">
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Flex>
      <Flex w="80%" minH="100vh" bg="#fff" flexWrap="wrap" gap="10">
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