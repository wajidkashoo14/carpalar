import { Container, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

function Applicationstatus() {
  return (
    <Container
      minW="100vw"
      height="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mb="30%"
    >
      <Image src="/sucess.png" alt="signup" width={200} height={200} />
      <Heading color="#4fb526" my={3}>
        Your Application Submitted Successfully!
      </Heading>
      <Text fontSize="1.2rem">You will listen from us very soon</Text>
    </Container>
  );
}

export default Applicationstatus;
