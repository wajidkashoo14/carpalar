import React from "react";
import { Container, Box, Button, Divider, Heading } from "@chakra-ui/react";

function NavigationItems() {
  return (
    <Container
      maxW="15%"
      display="flex"
      p="3 O"
      flexDir="column"
      alignItems="flex-start"
      backgroundColor="#E9F3FC"
      height="100vh"
      marginTop="6%"
      borderRight=".5px solid #DCDCDC"
    >
      <Box display="flex" flexDir="column" maxWidth="20%" marginTop="1rem">
        <Heading width="15rem" fontSize="1.5rem" textAlign="center" mb="1rem">
          Dashboard
        </Heading>
        <Button fontSize="1.2rem" my=".6rem" width="8rem">
          Applications
        </Button>
        <Button fontSize="1.2rem" my=".6rem" width="4.5rem">
          Sales
        </Button>
        <Button fontSize="1.2rem" my=".6rem" width="6rem">
          Reviews
        </Button>
        <Button fontSize="1.2rem" my=".6rem" width="8rem">
          Transactions
        </Button>
        <Button fontSize="1.2rem" my=".6rem" width="6rem">
          Settings
        </Button>
        <Button fontSize="1.2rem" my=".6rem" width="6rem">
          Logout
        </Button>
      </Box>
      <Divider orientation="horizontal" />
    </Container>
  );
}

export default NavigationItems;
