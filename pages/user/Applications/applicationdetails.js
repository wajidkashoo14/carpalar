import { Box, Flex, Heading, Text, Img, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../../../styles/dashboard.module.css";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import Applicationcard from "./applicationcard";

function Applicationdetails() {
  const [active, setActive] = useState("personaldetails");
  return (
    <DashboardLayout>
      <Box maxW="83vw" height="100vh" mb="20%" pt="5rem" mx={"auto"}>
        <Box height="40vh" maxW="100vw" mt="2rem" mx={2} borderRadius="1rem">
          <Flex
            backgroundColor="#E9F3FC"
            borderRadius="1rem"
            marginTop={5}
            border="1px solid  #DCDCDC"
            boxShadow="lg"
            mx={3}
            py={2}
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
                <Text
                  bgColor="#1A202C"
                  bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                >
                  Mercedes Benz 2012
                </Text>
                <span className={styles.dashboard__span}>wajid</span>
                <span className={styles.dashboard__span}>kashoo</span>
                <span className={styles.dashboard__span}>197</span>
              </Box>
            </Flex>
            <Box
              backgroundColor="#FFF"
              width="20vw"
              boxShadow="lg"
              borderRadius="1rem"
              height="20vh"
              my={"auto"}
              display="flex"
            >
              <Heading
                textAlign="center"
                fontSize="1.5rem"
                p={5}
                color="#3f61ca"
              >
                Status
              </Heading>
              <Heading
                fontSize="1.5rem"
                textAlign="center"
                color="#91b459"
                p={5}
              >
                Approved
              </Heading>
            </Box>
          </Flex>
        </Box>
        <Flex gap={10} height="40vh" mx={2}>
          <Box
            backgroundColor="#ebf3f5"
            width="100%"
            boxShadow="lg"
            borderRadius="1rem"
            p={5}
            mx={3}
          >
            <Flex>
              <Button
                my={2}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                size="md"
                mx="auto"
                justifyContent="center"
                alignItems="center"
                onClick={() => setActive("personaldetails")}
              >
                Personal Details
              </Button>
              <Button
                my={2}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                size="md"
                mx="auto"
                onClick={() => setActive("address")}
              >
                Address
              </Button>
              <Button
                my={2}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                size="md"
                mx="auto"
                onClick={() => setActive("contact")}
              >
                Contact
              </Button>
              <Button
                my={2}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                size="md"
                mx="auto"
                onClick={() => setActive("appliedfor")}
              >
                Applied For
              </Button>
              <Button
                my={2}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                size="md"
                mx="auto"
                onClick={() => setActive("gurantorone")}
              >
                Gurantor one
              </Button>

              <Button
                my={2}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                size="md"
                mx="auto"
                onClick={() => setActive("gurantortwo")}
              >
                Gurantor two
              </Button>
            </Flex>

            {active === "personaldetails" && (
              <Applicationcard
                heading="Personal Details"
                input={{ "First Name": "Wajid", "Last Name": "Kashoo" }}
              />
            )}

            {active === "address" && (
              <Applicationcard
                heading="Address"
                input={{
                  Address: "JK",
                  State: "Srinagar",
                  Nationality: "Indian",
                }}
              />
            )}
            {active === "contact" && (
              <Applicationcard
                heading="Contact"
                input={{
                  "Phone Number": "+91 9596 10 3894",
                  "ALternate Number": "+91 9596 10 3894",
                  Email: "wkashoo@gmail.com",
                }}
              />
            )}
            {active === "appliedfor" && (
              <Applicationcard
                heading="Applied For"
                input={{
                  "Car Name": "Maybach",
                  "Car Id": "JK01AD 7854",
                  License: "Yes",
                  "Third Party Status": "yes",
                  "Update Third Party Status": "yes",
                }}
              />
            )}
            {active === "gurantorone" && (
              <Applicationcard
                heading="Gurantor One"
                input={{
                  "First Name": "Wajid",
                  "Last Name": "Kashoo",
                  Title: "kaaz",
                  "Job Title": "Software Engineer",
                  Email: "wkashoo@gmail.com",
                  Relationship: "Father",
                }}
              />
            )}
            {active === "gurantortwo" && (
              <Applicationcard
                heading="Gurantor Two"
                input={{
                  "First Name": "Wajid",
                  "Last Name": "Kashoo",
                  Title: "kaaz",
                  "Job Title": "Software Engineer",
                  Email: "wkashoo@gmail.com",
                  Relationship: "Father",
                }}
              />
            )}
          </Box>
        </Flex>
      </Box>
    </DashboardLayout>
  );
}

export default Applicationdetails;
