import { Container, Heading, Input, Box, Button } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

function verification() {
  const router = useRouter();
  return (
    <Container
      minW="40vw"
      height="80vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mb="30%"
      boxShadow="lg"
    >
      <Heading fontSize="1.3rem" pt="10rem" my={5}>
        Enter One time password(OTP) send on your number ending with **9797{" "}
      </Heading>
      <Input type="number" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Button
          my={5}
          className="primaryButton"
          backgroundColor="#4258EF"
          _hover={{ backgroundColor: "#273edc" }}
          _focus={{ outline: "none" }}
          color="white"
          onClick={(e) => {
            router.push("/user/dashboard");
          }}
        >
          Submit
        </Button>
        <Button
          my={5}
          className="primaryButton"
          backgroundColor="#4258EF"
          _hover={{ backgroundColor: "#273edc" }}
          _focus={{ outline: "none" }}
          color="white"
          onClick={(e) => {
            router.push("/user/dashboard");
          }}
        >
          Resend
        </Button>
      </Box>
    </Container>
  );
}

export default verification;
