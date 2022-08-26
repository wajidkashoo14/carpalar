import { Flex, Box, Heading, Img } from "@chakra-ui/react";
import React from "react";

const Info = () => {
	return (
		<Box w="85%" height="100vh" borderRight=".5px solid #DCDCDC">
			<Heading marginLeft="1rem">Dashboard</Heading>
			<Flex
				height="100%"
				wrap={"wrap"}
				p="2"
				justifyContent="space-around"
				alignItems="flex-start"
			>
				<Flex boxShadow="lg" height="30vh" w="45%">
					1
				</Flex>
				<Flex boxShadow="lg" height="30vh" w="45%">
					2
				</Flex>
				<Flex boxShadow="lg" height="30vh" w="45%">
					3
				</Flex>
				<Flex boxShadow="lg" height="30vh" w="45%">
					4
				</Flex>
			</Flex>
		</Box>
	);
};

export default Info;
