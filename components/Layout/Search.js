import { Container, Select, Button } from "@chakra-ui/react";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function Search() {
  return (
    <Container
      borderRadius="5"
      mt="-16"
      minw="50vw"
      maxW={{ base: "90vw", md: "60vw" }}
      bg="white"
      minH="20vh"
      maxH={{ base: "90vh", md: "20vh" }}
      boxShadow="lg"
      centerContent
      display={{ base: "block", md: "flex" }}
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      mb="20"
      bgColor="white"
      gap={{ base: "10" }}
      py={{ base: "8" }}
    >
      <Select
        maxW={{ base: "100%", md: "25%" }}
        variant="filled"
        placeholder="Select Make"
        my={{ base: "5" }}
        py={{ base: "2" }}
      >
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Select
        maxW={{ base: "100%", md: "25%" }}
        variant="filled"
        placeholder="Select Model"
        my={{ base: "5" }}
        py={{ base: "2" }}
      >
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Select
        maxW={{ base: "100%", md: "25%" }}
        variant="filled"
        placeholder="Select Type"
        my={{ base: "5" }}
        py={{ base: "2" }}
      >
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Button
        className="primaryButton"
        px="8"
        fontWeight="normal"
        size="md"
        colorScheme="blue"
        backgroundColor="#4258EF"
        _hover={{ backgroundColor: "#273edc" }}
        _focus={{ outline: "none" }}
      >
        <BiSearchAlt /> &nbsp; SEARCH
      </Button>
    </Container>
  );
}

export default Search;
