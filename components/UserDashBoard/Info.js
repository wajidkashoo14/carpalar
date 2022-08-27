import { Flex, Button, Box, Heading, Divider, Text } from "@chakra-ui/react";
import React from "react";

const Info = () => {
	return (
		<Box w="75%" height="90vh" pl="20">
			<Heading>Dashboard</Heading>
			<Flex wrap={"wrap"}>
				<Flex
					boxShadow="lg"
					bg="#def1ff"
					borderRadius="10"
					m="4"
					w="45%"
					height="fit-content"
					flexDir="column"
					p="4"
				>
					<Flex pb="2" justifyContent="space-between">
						<Text fontSize="1.2rem">Latest Application</Text>{" "}
						<Button
							size="sm"
							variant="solid"
							color="#fff"
							colorScheme="green"
						>
							DETAILS
						</Button>
					</Flex>
					<Flex alignItems="flex-end" justifyContent="space-between">
						<Heading fontSize="1.22rem">Applied For</Heading>
						<Heading fontSize="1.62rem">Tesla X98</Heading>
					</Flex>
					<Divider my="1" />
					<Flex
						fontWeight="normal"
						fontSize="18px"
						w="100%"
						flexDir="column"
					>
						<Flex
							borderRadius="5"
							justifyContent="space-between"
							my="1"
							p="2"
						>
							<Text>Applied On</Text>
							<Text fontWeight="medium">2022-20-12</Text>
						</Flex>
						<Flex
							justifyContent="space-between"
							borderRadius="5"
							p="2"
							bg="red.50"
							color="red"
						>
							<Text>Status</Text>
							<Text fontWeight="medium">Pending</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					boxShadow="lg"
					borderRadius="10"
					bg="#4162ef"
					height="fit-content"
					m="4"
					w="45%"
					flexDir="column"
					p="4"
					color="#fff"
				>
					<Flex pb="2" justifyContent="space-between">
						<Text fontSize="1.2rem">Next Transaction</Text>{" "}
						<Button
							size="sm"
							variant="solid"
							color="#fff"
							colorScheme="green"
						>
							PAY NOW
						</Button>
					</Flex>
					<Flex alignItems="flex-end" justifyContent="space-between">
						<Heading fontSize="1.2rem">Amount Due</Heading>
						<Heading fontSize="1.6rem">$1212.00</Heading>
					</Flex>
					<Divider my="1" />
					<Flex
						fontWeight="normal"
						fontSize="18px"
						w="100%"
						flexDir="column"
					>
						<Flex
							borderRadius="5"
							justifyContent="space-between"
							my="1"
							p="2"
						>
							<Text>Due Date</Text>
							<Text fontWeight="medium">2022-20-29</Text>
						</Flex>
						<Flex
							justifyContent="space-between"
							borderRadius="5"
							p="2"
							bg="red.50"
							color="red"
						>
							<Text>Status</Text>
							<Text fontWeight="medium">Pending</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					boxShadow="lg"
					borderRadius="10"
					m="4"
					w="45%"
					height="30vh"
					flexDir="column"
					p="4"
					bg="#f3f8fc"
				></Flex>
				<Flex
					boxShadow="lg"
					borderRadius="10"
					bg="#5A71B5"
					height="30vh"
					m="4"
					w="45%"
					flexDir="column"
					p="4"
					color="#fff"
				></Flex>
			</Flex>
		</Box>
	);
};

export default Info;
