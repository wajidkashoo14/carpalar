import {
  Flex,
  Stack,
  Text,
  Heading,
  Button,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import Productreview from "./Productreview";
import { useRouter } from "next/router";

export default function SIngleCar() {
  const router = useRouter();
  return (
    <Container
      display={{ base: "block", md: "flex" }}
      justifyContent="space-between"
      maxW="80vw"
      px={{ base: "0", md: "10" }}
      pt="9rem"
    >
      <Stack mb={{ base: "8" }}>
        <Heading
          as="h2"
          size="2xl"
          textTransform="uppercase"
          fontWeight="bold"
          mb="2"
        >
          Mustang B3 aouf
        </Heading>
        <Text
          fontSize="30"
          width="fit-content"
          bgColor="black"
          color="#fff"
          p="3"
          mb="6"
          fontWeight="bolder"
        >
          $305,000
        </Text>
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Mileage</Text>
          <Text color="gray.600">25 000 km</Text>
        </Flex>
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Transmission</Text>
          <Text color="gray.600">Manual</Text>
        </Flex>
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Color</Text>
          <Text color="gray.600">Black</Text>
        </Flex>
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Body</Text>
          <Text color="gray.600">Hatchback</Text>
        </Flex>
        <hr />
        <Flex justifyContent="space-between">
          <Text fontWeight="medium">Fuel</Text>
          <Text color="gray.600">Gasoline</Text>
        </Flex>
        <Flex gap={10} mt="6">
          <Button
            mt="6"
            width="fit-content"
            variant="solid"
            className="primaryButton"
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            onClick={(e) => {
              router.push("/buyform");
            }}
          >
            BUY NOW
          </Button>
          <Button
            mt="6"
            width="fit-content"
            variant="solid"
            className="primaryButton"
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            onClick={(e) => {
              router.push("/apply");
            }}
          >
            Apply for finance
          </Button>
        </Flex>
      </Stack>
      <Image src="/homecar.jpg" alt="car" width={550} height={350} />I
    </Container>
  );
}
