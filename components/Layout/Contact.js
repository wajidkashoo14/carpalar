import {
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Input,
  Textarea,
  Button,
  useToast,
  Checkbox,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { sendEmail } from "../../utils/services/email.service";
import { useRouter } from "next/router";
function Contact() {
  const Toast = useToast();
  const formRef = useRef(null);
  const router = useRouter();
  async function onSubmitHandler(e) {
    e.preventDefault();
    const inputValues = {};
    console.log("formrf", formRef.current);
    for (let index = 0; index < formRef.current.length; index++) {
      const name = formRef.current[index].name;
      const value = formRef.current[index].value;
      inputValues[name] = value;
    }
    try {
      const resp = await sendEmail(inputValues);
      if (resp.status === 200) {
        Toast({
          title: "Thank you, your response has been submitted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        for (let index = 0; index < formRef.current.length; index++) {
          formRef.current[index].value = "";
        }
      }
    } catch (error) {
      Toast({
        title: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }
  return (
    <Container
      maxW="100%"
      minH="100vh"
      mb="15rem"
      px={["1rem", "2rem", "4rem", "4rem"]}
      pt="18vh"
    >
      <Box
        display={{ sm: "block", md: "block", lg: "flex" }}
        justifyContent="center"
      >
        <Flex
          flexDir="column"
          width={{ sm: "100%", md: "100%", lg: "50%" }}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          pb={{ sm: "2rem", lg: "2rem" }}
        >
          <Heading
            fontSize={{ base: "2xl", md: "2xl", lg: "5xl" }}
            fontWeight="bold"
            my="10"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="100"
          >
            Contact us
          </Heading>
          <Text
            fontWeight="bold"
            mb="4"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="100"
          >
            We would love to hear from you
          </Text>
          <Text
            width={{ sm: "100%", md: "100%", lg: "70%" }}
            fontSize="md"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="100"
            textAlign="justify"
          >
            Carpalar is a genuine and notable digital car leasing brand that
            aims at ensuring ownership of automobiles in the most convenient
            way. Simply refer to Carpalar as a financial technology brand that
            provides cars and buses to interested individuals or brands via hire
            purchase.
          </Text>
          <Box
            my="10"
            fontSize="lg"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="200"
          >
            <Text>2 Martins Street</Text>
            <Text>Lagos Nigeria</Text>
          </Box>
          <Box
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="500"
          >
            <Text> Call +234 903000 9458</Text>
            <Text
              display="flex"
              my="3"
              gap="3"
              justifyContent="flex-start"
              alignItems="center"
            >
              <MdOutlineMail fontSize="16px" />
              <Link href="mailto:info@carpalar.com" target="_blank">
                info@carpalar.com
              </Link>
            </Text>
          </Box>
          <Box
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="500"
          >
            <Flex gap="6" my={[5, 5]}>
              <Heading fontSize="xl" mr="5">
                Follow us
              </Heading>

              <Link
                passHref
                href="https://www.instagram.com/carpalarhq"
                target="_blank"
              >
                <FaFacebook cursor="pointer" fontSize="26px" />
              </Link>

              <Link
                passHref
                href="https://www.facebook.com/carpalarhq"
                backgroundColor="black"
                target="_blank"
              >
                <FaInstagram cursor="pointer" fontSize="26px" />
              </Link>

              <Link
                passHref
                href="https://api.whatsapp.com/send?phone=2349030009486&text=Hello"
                target="_blank"
              >
                <FaWhatsapp cursor="pointer" fontSize="26px" />
              </Link>
            </Flex>
          </Box>
        </Flex>

        <Flex
          flexDir="column"
          width={{ sm: "100%", md: "100%", lg: "50%" }}
          minH="55vh"
          bg="#EFF3FA"
          rounded="10"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <form onSubmit={onSubmitHandler} ref={formRef}>
            <Flex
              p="2rem"
              width="100%"
              alignItems="flex-start"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Input
                width="30%"
                required
                name="name"
                placeholder="Name"
                bg="#FFFFFF"
                h="3rem"
                type="text"
              />
              <Input
                width="30%"
                required
                name="email"
                placeholder="Email"
                bg="#FFFFFF"
                h="3rem"
                type="email"
              />
              <Input
                width="30%"
                required
                name="phone"
                placeholder="Phone"
                bg="#FFFFFF"
                v
                h="3rem"
                type="number"
              />
              <Textarea
                width="100%"
                mt="5"
                name="message"
                required
                placeholder="Message"
                bg="#FFFFFF"
                rows="15"
              />
              <Button
                type="submit"
                display="block"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                fontSize="md"
                textTransform="uppercase"
                mt="4"
                textAlign="center"
                mx="auto"
              >
                Submit
              </Button>
            </Flex>
          </form>
        </Flex>
      </Box>
      <AspectRatio ratio={16 / 9} mt="5rem" borderRadius="1rem">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.05866297739!2d3.338797286933401!3d6.48813155790773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c035a006821%3A0x6108672e1d2b079e!2s2%20Martins%20St%2C%20Surulere%20101241%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sin!4v1660977590042!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </AspectRatio>
    </Container>
  );
}

export default Contact;
