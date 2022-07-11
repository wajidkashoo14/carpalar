import { Box, Container, Img, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "../../styles/dashboard.module.css";

function Profile() {
  return (
    <Container
      maxW="20%"
      p="3 O"
      height="100vh"
      backgroundColor="#E9F3FC"
      marginTop="6%"
      position="relative"
    >
      <Box
        height="3rem"
        width="8rem"
        position="absolute"
        right="-5%"
        top="-3%"
        display="flex"
      >
        <Box marginTop="3.2rem" marginLeft=".5rem">
          <IoIosNotificationsOutline fontSize="1.5rem" />
        </Box>

        <Img
          src="/homecar.jpg"
          height={10}
          width={10}
          borderRadius="50%"
          style={{ borderRadius: "15px" }}
          overflow="hidden"
          alt="car"
          margin="auto"
          marginTop={10}
        />
      </Box>
      <Flex
        display="flex"
        flexDir="column"
        alignItems="flex-start"
        marginTop={10}
        marginLeft="0"
        width="100%"
      >
        <Img
          src="/homecar.jpg"
          height={100}
          width={100}
          borderRadius="1rem"
          style={{ borderRadius: "15px" }}
          overflow="hidden"
          alt="car"
          marginTop={10}
          marginBottom={2}
        />
        <p className={styles.dashboard__p}>hello,</p>
        <Heading fontSize="1.4rem">Wajid Kashoo</Heading>
        <p className={styles.dashboard__p__second}>
          Check these stats below in case you have missed something
        </p>
      </Flex>

      <Flex marginTop={8} justifyContent="space-between">
        <Box>
          <Box pt={3}>
            <Heading fontSize="1rem">Turnover</Heading>
            <p className={styles.dashboard__p__second}>Amount of funds</p>
          </Box>
          <Box pt={3}>
            <Heading fontSize="1rem">Income</Heading>
            <p className={styles.dashboard__p__second}>Amount minus fee</p>
          </Box>
          <Box pt={3}>
            <Heading fontSize="1rem">Bids</Heading>
            <p className={styles.dashboard__p__second}>
              Amount of auction bids
            </p>
          </Box>
        </Box>
        <Box pt={3} mr={5}>
          <p className={styles.dashboard__p__first}>$268,987</p>
          <p className={styles.dashboard__p__sec}>$174,987</p>
          <p className={styles.dashboard__p__third}>219</p>
        </Box>
      </Flex>
    </Container>
  );
}

export default Profile;
