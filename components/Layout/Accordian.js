import {
  Container,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

function Accordian() {
  return (
    <Box my="10rem" textAlign="center" w="100vw" minH="100vh" px="6rem">
      <Heading mt="10">Frequently Asked Questions</Heading>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="100vh"
        gap="10"
        mt="-5rem"
        bg="#F2F5FB"
        mx="auto"
        px="2rem"
        borderRadius="20"
      >
        <Flex w="100%">
          <Accordion allowToggle w="100%">
            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Do you offer any sort of warranty?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    When should I get my oil changed?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How do I check my tire pressure?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How often should I rotate my tires?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex w="100%">
          <Accordion allowToggle w="100%">
            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What is Auto Detailing?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Is it urgent to fix an oil leak?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What causes brake pulsation?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py="3">
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" border="none">
                    Why is it important to rotate tires?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Box>

      <Link href="/aboutus">
        <Button
          mt="-15rem"
          className="primaryButton"
          backgroundColor="#4258EF"
          _hover={{ backgroundColor: "#273edc" }}
          _focus={{ outline: "none" }}
          color="white"
        >
          Learn more
        </Button>
      </Link>
    </Box>
  );
}

export default Accordian;
