import React from "react";
import Explore from "../components/Layout/Explore";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";
import { Container, Flex, Heading, Text, Box, Select } from "@chakra-ui/react";
function explore() {
	return (
		<Container
			maxW="100%"
			maxH="110vh"
			px="5"
			pb="5"
			display="flex"
			mb="10rem"
			pt="12vh"
			// overflowY="scroll"
		>
			<Flex
				w="20vw"
				h="80vh"
				bg="#fff"
				mr="3"
				px="3"
				mb="5"
				flexDir="column"
				boxShadow="2xl"
				borderRadius="15px"
				// position="fixed"
			>
				<Heading
					fontWeight="500"
					textTransform="uppercase"
					fontSize="22px"
					my="1"
					mt="4"
				>
					Filter vehicles
				</Heading>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						keyword search?
					</Text>
					<Select variant="filled" placeholder="Select Make">
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						Missing Manufacturer
					</Text>
					<Select variant="filled" placeholder="Select Make">
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						missing model
					</Text>
					<Select variant="filled" placeholder="Select Make">
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						year
					</Text>
					<Select variant="filled" placeholder="Select Make">
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						engine
					</Text>
					<Select variant="filled" placeholder="Select Make">
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						transmission
					</Text>
					<Select variant="filled" placeholder="Select Make">
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select>
				</Box>
			</Flex>
			<Explore />
		</Container>
	);
}

export default explore;
