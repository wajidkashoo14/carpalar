import { Box, Flex, Heading, Text, Img, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/dashboard.module.css";
function applicationdetails() {
  return (
    <Box maxW="100vw" height="100vh" mb="55%" pt="5rem">
      <Box height="40vh" width="100%" mt="2rem" mx={2} borderRadius="1rem">
        <Flex
          backgroundColor="#E9F3FC"
          borderRadius="1rem"
          marginTop={5}
          border="1px solid  #DCDCDC"
          boxShadow="lg"
          mx={3}
        >
          <Box>
            <Img
              src="/homecar.jpg"
              height={250}
              width={400}
              style={{ borderRadius: "15px" }}
              overflow="hidden"
              alt="car"
              margin="auto"
            />
          </Box>
          <Flex flexDir="column" width="100%">
            <Box marginTop="3rem" marginLeft="3rem">
              <Heading fontSize="1.4rem" mb={3}>
                2013 Sabaru Sorester Premium Plus
              </Heading>
              <span className={styles.dashboard__span}>wajid</span>
              <span className={styles.dashboard__span}>kashoo</span>
              <span className={styles.dashboard__span}>197</span>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex gap={10} mt={10} height="70vh" mx={2}>
        <Box
          backgroundColor="#E1F3F7"
          width="80vw"
          boxShadow="lg"
          borderRadius="1rem"
          p={5}
          mx="auto"
        >
          <Heading ml={10}>Application Details</Heading>
          <Box px={10}>
            <Box display="flex" gap="6rem" py={6} mt={8}>
              <Box>
                <Heading fontSize="1.1rem">First Name</Heading>
                <p>Shakir</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Last Name</Heading>
                <p>Khan</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Marital Status</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Gender</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Phone</Heading>
                <p>Shakir</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Experience</Heading>
                <p>Khan</p>
              </Box>
            </Box>
            <Box display="flex" gap="6rem" py={6}>
              <Box>
                <Heading fontSize="1.1rem">Nationality</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Address</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Qualifiation</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Alternate Number</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">State</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">IGA</Heading>
                <p>Male</p>
              </Box>
            </Box>
            <Box display="flex" gap="6rem" py={6}>
              <Box>
                <Heading fontSize="1.1rem">Email</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">License</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">DOB</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Nationality</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Applied Car Name</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Applied Car Id</Heading>
                <p>Male</p>
              </Box>
            </Box>
            <Box display="flex" gap="3rem" py={6}>
              <Box>
                <Heading fontSize="1.1rem">Birth Place</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Driving For</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Third Party Status</Heading>
                <p>Male</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Update Third Party Status</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Gurantor One</Heading>
                <p>Unmarried</p>
              </Box>
              <Box>
                <Heading fontSize="1.1rem">Gurantor Two</Heading>
                <p>Male</p>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          backgroundColor="#c4d6ed"
          width="20vw"
          boxShadow="lg"
          borderRadius="1rem"
        >
          <Heading textAlign="center" p={5} mt={10}>
            Status
          </Heading>
          <Heading fontSize="1.5rem" textAlign="center" color="#91b459">
            Approved
          </Heading>
        </Box>
      </Flex>
      <Flex
        width="98vw"
        maxH="40vh"
        m={5}
        justifyContent="space-around"
        mx="auto"
      >
        <Box
          display="flex"
          gap="2rem"
          flexDirection="column"
          backgroundColor="#E1F296"
          p={10}
          boxShadow="xl"
          borderRadius="1rem"
        >
          <Heading>Gurantor One</Heading>
          <Box display="flex" gap="3rem">
            <Box>
              <Heading fontSize="1.1rem">First Name</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Last Name</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Title</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Phone</Heading>
              <p>Unmarried</p>
            </Box>
          </Box>
          <Box display="flex" gap="3rem">
            <Box>
              <Heading fontSize="1.1rem">Job Title</Heading>
              <p>Unmarried</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Email</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Relationship</Heading>
              <p>Male</p>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          gap="2rem"
          flexDirection="column"
          backgroundColor="#5ABA8A"
          p={10}
          boxShadow="xl"
          borderRadius="1rem"
        >
          <Heading>Gurantor Two</Heading>
          <Box display="flex" gap="3rem">
            <Box>
              <Heading fontSize="1.1rem">First Name</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Last Name</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Title</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Phone</Heading>
              <p>Unmarried</p>
            </Box>
          </Box>
          <Box display="flex" gap="3rem">
            <Box>
              <Heading fontSize="1.1rem">Job Title</Heading>
              <p>Unmarried</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Email</Heading>
              <p>Male</p>
            </Box>
            <Box>
              <Heading fontSize="1.1rem">Relationship</Heading>
              <p>Male</p>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default applicationdetails;
