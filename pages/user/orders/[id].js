import {
  Container,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Img,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";

const OrderDetails = () => {
  return (
    <DashboardLayout>
      <Container maxW="80vw" height="100vh" pt="2rem" mb="35rem">
        <Flex marginTop={7} flexDir="column">
          <Flex
            justifyContent="flex-start"
            minH="40vh"
            my="auto"
            borderRadius="1rem"
            mt="2.5rem"
            px=".5rem"
          >
            <Flex my="auto">
              <Img
                src="/homecar.jpg"
                width={350}
                height={300}
                style={{ borderRadius: "15px" }}
                overflow="hidden"
                alt="car"
              />
            </Flex>
            <Flex mt="1.2rem">
              <Box px={5} py={5}>
                <Box pb={5}>
                  <Heading fontSize="1.1rem" style={{ color: "#2488F6" }}>
                    Body Type
                  </Heading>
                  <p>Cab</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem" style={{ color: "#2488F6" }}>
                    Color
                  </Heading>
                  <p>White</p>
                </Box>
              </Box>
              <Box px={5} py={5}>
                <Box pb={5}>
                  <Heading fontSize="1.1rem" style={{ color: "#2488F6" }}>
                    Registration
                  </Heading>
                  <p>JK01M 4567</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem" style={{ color: "#2488F6" }}>
                    Registration State
                  </Heading>
                  <p>Kashmir</p>
                </Box>
              </Box>
              <Box px={5} py={5}>
                <Box pb={5}>
                  <Heading fontSize="1.1rem" style={{ color: "#2488F6" }}>
                    Registration Status
                  </Heading>
                  <p>Registered</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem" style={{ color: "#2488F6" }}>
                    Year
                  </Heading>
                  <p>2020</p>
                </Box>
              </Box>
            </Flex>
            <Flex
              mt={2}
              backgroundColor="#2488F6"
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="lg"
              p={5}
              flexDir="column"
              gap={10}
            >
              <Box>
                <Text
                  bgColor="#FFF"
                  bgClip="text"
                  fontSize="l"
                  fontWeight="extrabold"
                  mt={2}
                >
                  Your Upcoming Transaction
                </Text>
              </Box>
              <Box display="flex" gap={10}>
                <Box>
                  <Heading fontSize="1rem" color="#fff">
                    Due Date
                  </Heading>
                  <p style={{ color: "#fff" }}>28th August 2022</p>
                </Box>
                <Box>
                  <Heading fontSize="1rem" color="#fff">
                    Amount
                  </Heading>
                  <p style={{ color: "#fff", fontWeight: "bold" }}>$500</p>
                </Box>
              </Box>
              <Box>
                <Button
                  className="primaryButton"
                  textAlign="center"
                  mt={3}
                  color="#2488F6"
                  backgroundColor="white"
                >
                  Pay now
                </Button>
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" p={5} mt={5}>
            <Flex
              gap={5}
              width="25%"
              m={3}
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="xl"
              p={10}
            >
              <Box display="flex" gap={5} flexDir="column">
                <Box>
                  <Heading fontSize="1.1rem">Total Amount</Heading>
                  <p>$12000</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Paid Amount</Heading>
                  <p>$8000</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Installment Amount</Heading>
                  <p>$300</p>
                </Box>
              </Box>
            </Flex>
            <Flex
              gap={5}
              width="25%"
              m={3}
              bgColor="#2488F6"
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="xl"
              p={10}
            >
              <Box display="flex" gap={5} flexDir="column">
                <Box>
                  <Heading fontSize="1.1rem" color="#fff">
                    Total Trasactions
                  </Heading>
                  <p style={{ color: "#fff" }}>JK01M 4567</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem" color="#fff">
                    Paid Tranactions
                  </Heading>
                  <p style={{ color: "#fff" }}>5</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem" color="#fff">
                    Upfront fee{" "}
                  </Heading>
                  <p style={{ color: "#fff" }}>5</p>
                </Box>
              </Box>
            </Flex>
            <Flex
              gap={5}
              width="25%"
              m={3}
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="xl"
              p={10}
            >
              <Box display="flex" gap={5} flexDir="column">
                <Box>
                  <Heading fontSize="1.1rem">Upfront fee paid</Heading>
                  <p>JK01M 4567</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Created At</Heading>
                  <p>Kashmir</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Total Payements</Heading>
                  <p>Kashmir</p>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" mt="7" flexDir="column">
          <Heading as="h3" fontWeight="600" fontSize="1.4rem">
            Transaction History
          </Heading>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>S No.</Th>
                  <Th>Id</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>
                  <Td>$500</Td>
                  <Td>Approved</Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>
                  <Td>$500</Td>
                  <Td>Approved</Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>
                  <Td>$500</Td>
                  <Td>Approved</Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>
                  <Td>$500</Td>
                  <Td>Approved</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Container>
    </DashboardLayout>
  );
};

export default OrderDetails;
