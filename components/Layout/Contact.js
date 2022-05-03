import {
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Input,
  Textarea,
  Button,
  Checkbox,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Contact() {
  return (
    <Container maxW="100%" minH="100vh" mb="15rem" px="4rem" pt="18vh">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Flex flexDir="column" width="50%">
          <Heading fontSize="5xl" fontWeight="bold" my="10">
            Contact us
          </Heading>

          <Text width="70%" fontSize="md">
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </Text>
          <Box my="10" fontSize="lg">
            <Text>West 12th Street</Text>
            <Text>New York, NY, USA</Text>
          </Box>
          <Box my="10">
            <Text>(123) 456-78901</Text>
            <Text
              display="flex"
              my="3"
              gap="3"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <MdOutlineMail fontSize="16px" p />
              <Text mt="-2"> support@vehica.com</Text>
            </Text>
          </Box>
          <Box>
            <Flex gap="3">
              <Heading fontSize="xl" mr="5">
                Follow us
              </Heading>

              <Link href="/">
                <FaFacebook fontSize="26px" />
              </Link>

              <Link href="/" backgroundColor="black">
                <FaInstagram fontSize="26px" />
              </Link>

              <Link href="/">
                <FaWhatsapp fontSize="26px" />
              </Link>
            </Flex>
          </Box>
        </Flex>

        <Flex flexDir="column" width="50%">
          <Box
            width="95%"
            height="60vh"
            bg="#EFF3FA"
            rounded="10"
            ml="auto"
            my="10"
          >
            <Flex px="2rem" gap="3" py="4rem">
              <Flex>
                <Input placeholder="Name" bg="#FFFFFF" mx="2" h="3rem" />
                <Input placeholder="Email" bg="#FFFFFF" mx="2" h="3rem" />
                <Input placeholder="Phone" bg="#FFFFFF" v mx="2" h="3rem" />
              </Flex>
            </Flex>
            <Flex flexDir="column" px="2.5rem">
              <Textarea placeholder="Message" bg="#FFFFFF" h="10rem" mt="-10" />
            </Flex>

            <Checkbox px="2.5rem" my="5" defaultChecked>
              I accept the privacy policy
            </Checkbox>
            <Link href="/">
              <Button
                my={1}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                px="6"
                letterSpacing="2px"
                fontSize="xl"
                ml="30.5rem"
              >
                Send
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>

      <AspectRatio ratio={16 / 9} mt="5rem" borderRadius="1rem">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1081244948705!2d-74.00467018473175!3d40.73764627932901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25995b794f7b3%3A0x6d4d67fe803b4737!2sW%2012th%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1650746170770!5m2!1sen!2sin"
          borderRadius="2rem"
        />
      </AspectRatio>
    </Container>
  );
}

export default Contact;
