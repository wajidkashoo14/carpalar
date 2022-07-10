import { Container, Heading, Img } from "@chakra-ui/react";
import React from "react";

const Info = () => {
  return (
    <Container
      maxW="65%"
      p={3}
      height="100vh"
      backgroundColor="#ffffff"
      marginTop="6%"
      borderRight=".5px solid #DCDCDC"
    >
      <Heading marginLeft="1rem">Dashboard</Heading>

      <Img
        src="/homecar.jpg"
        height={400}
        width={700}
        style={{ borderRadius: "15px" }}
        overflow="hidden"
        alt="car"
        margin="auto"
        marginTop={10}
      />
    </Container>
  );
};

export default Info;
