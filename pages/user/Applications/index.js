import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Img,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import styles from "../../../styles/dashboard.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { FaWpforms } from "react-icons/fa";
import { getAllApplications } from "../../../utils/services/application.service";
import Empty from "../../../components/Empty";

function Index() {
  const router = useRouter();
  const [Applications, setApplications] = useState([]);
  useEffect(() => {
    const token = Cookies.get("token")
      ? JSON.parse(Cookies.get("token"))
      : null;
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    console.log(token);
    if (user && token) {
      getAllApplications(token)
        .then((data) => {
          console.log("applications", data);
          setApplications(data);
        })
        .catch((err) => console.log("applications err", err));
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <DashboardLayout>
      <Box p="2" w="100%" mb="8rem">
        {Applications && Applications.length > -1 ? (
          <>
            <Heading as="h1" my="3" textAlign="center">
              Applications
            </Heading>
            <Flex
              minHeight="100vh"
              justifyContent="flex-start"
              alignItems="flex-start"
              my="5"
              w="100%"
              flexWrap="wrap"
            >
              <Flex
                onClick={() => {
                  router.push("Applications/121212");
                }}
                width="45%"
                m="15px"
                boxShadow="md"
                p="2"
                pl="0"
                role="group"
                cursor="pointer"
                transition="transform .2s"
                overflow="hidden"
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .3s",
                  bg: "#7a98ff33",
                }}
              >
                <Image
                  transition="transform .2s"
                  _groupHover={{
                    transition: "transform .3s",
                    transform: "scale(1.06)",
                  }}
                  src="/homecar.jpg"
                  boxSize="180px"
                  objectFit="cover"
                />

                <Flex flexDir="column" alignItems="flex-end" width="100%">
                  <Flex
                    mx="2"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Heading w="70%" fontSize="1rem">
                      2013 Sabaru Sorester Premium Plus
                    </Heading>
                    <Heading fontSize="1.5rem" ml="3">
                      $3434.00
                    </Heading>
                  </Flex>
                  <Flex
                    justifyContent="space-between"
                    borderRadius="5"
                    px="2"
                    my="2"
                    fontWeight="medium"
                    bg="red.50"
                    color="red"
                    boxShadow="inner"
                    w="100%"
                  >
                    <Text fontSize="1rem">Status</Text>
                    <Text>Pending</Text>
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    w="100%"
                    fontWeight="medium"
                    mb="3"
                    px="2"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Text fontSize="1rem">Applied On</Text>
                    </Box>
                    <Text>2022-12-12</Text>
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    w="100%"
                    fontWeight="medium"
                    mb="3"
                    px="2"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Text fontSize="1rem">Last Updated</Text>
                    </Box>
                    <Text>2022-12-12</Text>
                  </Flex>
                  <Flex
                    alignItems="flex-start"
                    w="100%"
                    fontWeight="medium"
                    mb="3"
                    px="2"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Text fontSize="1rem">Application Fee</Text>
                    </Box>
                    <Text>
                      $200{" "}
                      <span
                        style={{
                          padding: "3px",
                          backgroundColor: "#fff5f5",
                          color: "red",
                        }}
                      >
                        Not paid
                      </span>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </>
        ) : (
          <Empty
            title="No Applications Found"
            message="You have not Applied for any Vehicles"
          />
        )}
      </Box>
    </DashboardLayout>
  );
}

export default Index;
