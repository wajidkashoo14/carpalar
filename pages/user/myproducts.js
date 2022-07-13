import { Container, Flex, Box, Img, Heading, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/dashboard.module.css";
import DashboardLayout from "../../components/Layout/DashboardLayout";

function myproducts() {
  return (
    <DashboardLayout>
      <Container maxW="100vw" height="100vh" pt="5rem" mb="30rem">
        <Flex
          backgroundColor="#E9F3FC"
          borderRadius="1rem"
          marginTop={5}
          border="1px solid  #DCDCDC"
          boxShadow="lg"
        >
          <Box>
            <Img
              src="/homecar.jpg"
              height={250}
              style={{ borderRadius: "15px" }}
              overflow="hidden"
              alt="car"
              margin="auto"
            />
          </Box>
          <Flex flexDir="column" width="100%">
            <Box marginTop="3rem" marginLeft="3rem">
              <Heading fontSize="1.4rem">
                2013 Sabaru Sorester Premium Plus
              </Heading>
              <span className={styles.dashboard__span}>wajid</span>
              <span className={styles.dashboard__span}>kashoo</span>
              <span className={styles.dashboard__span}>197</span>
            </Box>
            <Box display="flex" marginLeft="3rem" py={4}>
              <Box>
                <Heading fontSize="1.1rem">10d 12hrs</Heading>
                <p>Time left</p>
              </Box>
              <Box px={6}>
                <Heading fontSize="1.1rem">Sunday, 9:54pm</Heading>
                <p>Auction ending</p>
              </Box>
              <Box px={6}>
                <Heading fontSize="1.1rem">18</Heading>
                <p>Active bids</p>
              </Box>
              <Box px={6}>
                <Heading fontSize="1.1rem">$14,000</Heading>
                <p>Current bid</p>
              </Box>
            </Box>
            <Button
              width="8rem"
              marginLeft="3rem"
              backgroundColor="#4258EF"
              _hover={{ backgroundColor: "#273edc" }}
              _focus={{ outline: "none" }}
              color="#ffffff"
            >
              View Details
            </Button>
          </Flex>
        </Flex>

        <Flex
          backgroundColor="#E9F3FC"
          borderRadius="1rem"
          marginTop={5}
          border="1px solid  #DCDCDC"
          boxShadow="lg"
        >
          <Box>
            <Img
              src="/homecar.jpg"
              height={250}
              style={{ borderRadius: "15px" }}
              overflow="hidden"
              alt="car"
              margin="auto"
            />
          </Box>
          <Flex flexDir="column" width="100%">
            <Box marginTop="3rem" marginLeft="3rem">
              <Heading fontSize="1.4rem">
                2013 Sabaru Sorester Premium Plus
              </Heading>
              <span className={styles.dashboard__span}>wajid</span>
              <span className={styles.dashboard__span}>kashoo</span>
              <span className={styles.dashboard__span}>197</span>
            </Box>
            <Box display="flex" marginLeft="3rem" py={4}>
              <Box>
                <Heading fontSize="1.1rem">10d 12hrs</Heading>
                <p>Time left</p>
              </Box>
              <Box px={6}>
                <Heading fontSize="1.1rem">Sunday, 9:54pm</Heading>
                <p>Auction ending</p>
              </Box>
              <Box px={6}>
                <Heading fontSize="1.1rem">18</Heading>
                <p>Active bids</p>
              </Box>
              <Box px={6}>
                <Heading fontSize="1.1rem">$14,000</Heading>
                <p>Current bid</p>
              </Box>
            </Box>
            <Button
              width="8rem"
              marginLeft="3rem"
              backgroundColor="#4258EF"
              _hover={{ backgroundColor: "#273edc" }}
              _focus={{ outline: "none" }}
              color="#ffffff"
            >
              View Details
            </Button>
          </Flex>
        </Flex>
      </Container>
    </DashboardLayout>
  );
}

export default myproducts;
