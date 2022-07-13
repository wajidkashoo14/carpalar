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
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";

const OrderDetails = () => {
  return (
    <DashboardLayout>
      <Container maxW="80vw" height="100vh" pt="5rem" mb="35rem">
        <Flex marginTop={5} flexDir="column">
          <Flex justifyContent="space-between" minH="50vh" my="auto">
            <Flex my="auto">
              <Img
                src="/homecar.jpg"
                height={250}
                style={{ borderRadius: "15px" }}
                overflow="hidden"
                alt="car"
              />
            </Flex>
            <Flex mr="10rem" mt="3rem">
              <Box px={5} py={5}>
                <Box pb={5}>
                  <Heading fontSize="1.1rem">Body Type</Heading>
                  <p>Cab</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Color</Heading>
                  <p>White</p>
                </Box>
              </Box>
              <Box px={5} py={5}>
                <Box pb={5}>
                  <Heading fontSize="1.1rem">Registration</Heading>
                  <p>JK01M 4567</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Registration State</Heading>
                  <p>Kashmir</p>
                </Box>
              </Box>
              <Box px={5} py={5}>
                <Box pb={5}>
                  <Heading fontSize="1.1rem">Registration Status</Heading>
                  <p>Registered</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Year</Heading>
                  <p>2020</p>
                </Box>
              </Box>
            </Flex>
            <Flex
              m={3}
              backgroundColor="#E9F3FC"
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="lg"
              p={10}
            ></Flex>
          </Flex>
          <Flex justifyContent="space-between" p={5}>
            <Flex
              gap={5}
              width="25%"
              m={3}
              backgroundColor="#E9F3FC"
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="lg"
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
              backgroundColor="#E9F3FC"
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="lg"
              p={10}
            >
              <Box display="flex" gap={5} flexDir="column">
                <Box>
                  <Heading fontSize="1.1rem">Total Trasactions</Heading>
                  <p>JK01M 4567</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Paid Tranactions</Heading>
                  <p>5</p>
                </Box>
                <Box>
                  <Heading fontSize="1.1rem">Upfront fee </Heading>
                  <p>5</p>
                </Box>
              </Box>
            </Flex>
            <Flex
              gap={5}
              width="25%"
              m={3}
              backgroundColor="#E9F3FC"
              borderRadius="1rem"
              border="1px solid  #DCDCDC"
              boxShadow="lg"
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
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>S no.</Th>
                  <Th>id</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>

                  <Td>$550</Td>
                  <Td>Succed</Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>

                  <Td>$550</Td>
                  <Td>Succed</Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>

                  <Td>$550</Td>
                  <Td>Succed</Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>

                  <Td>$550</Td>
                  <Td>Succed</Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>101</Td>

                  <Td>$550</Td>
                  <Td>Succed</Td>
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
