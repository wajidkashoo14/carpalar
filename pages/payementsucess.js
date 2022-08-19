import {
  Button,
  Container,
  Heading,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
function Payementsucess() {
  const router = useRouter();
  return (
    <Container
      minW="100vw"
      height="100vh"
      mb="30%"
      pt="5rem"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="/sucess.png" alt="signup" width={200} height={200} />
      <Heading color="#4fb526">Payement Successful !</Heading>
      <Text fontSize="1.3rem" my={5}>
        Your order is confirmed. You will recieve an order confirmation
        email/SMS shortly.
      </Text>

      <Button
        my={9}
        colorScheme="blue"
        variant="outline"
        onClick={(e) => {
          router.push("/");
        }}
      >
        Continue Shopping
      </Button>
    </Container>
  );
}

export default Payementsucess;
