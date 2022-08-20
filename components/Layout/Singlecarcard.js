import { Box, Flex, Spacer, Text, Divider, Button } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Singlecarcard() {
	const router = useRouter();
	return (
		<Box
			zIndex="10"
			mx="2"
			my="5"
			height="fit-content"
			minW="25%"
			// bgColor="red"
			borderRadius="10"
			boxShadow="2xl"
			// onClick={(e) => {
			// 	router.push("/singlecar");
			// }}
		>
			<Flex flexDir="column" justifyContent="center" p={2}>
				<Image
					src="/homecar.jpg"
					height={200}
					width={260}
					style={{ borderRadius: "15px" }}
					overflow="hidden"
					alt="car"
				/>
				<Text
					mt="2"
					mx="2"
					width="4rem"
					padding=".1rem"
					bg="transparent"
					border="1px solid #4258EF "
					color="#be9ca1"
					borderRadius="5"
					fontSize="14px"
				>
					2020
				</Text>
				<Text my="1" mr="auto" p="2" fontWeight="600" fontSize="18px">
					Honda civic sedan
				</Text>
				<Flex
					bg="white"
					color="#fff"
					justifyContent="flex-start"
					alignItems="flex-start"
					px="2"
				>
					<Text fontWeight="bold" textAlign="center" color="#4258EF">
						$35,000
					</Text>
					<Divider orientation="vertical" px={5} />
					<Text fontWeight="bold" textAlign="center" color="#be9ca1">
						$299/month
					</Text>
				</Flex>
				<Spacer />
				<Flex
					justifyContent="space-between"
					p="3"
					textAlign="center"
					color="gray.400"
				>
					<Text>20000</Text>
					<Text>Diesel</Text>
					<Text>Automatic</Text>
				</Flex>
				<Button
					my={2}
					className="primaryButton"
					backgroundColor="#4258EF"
					_hover={{ backgroundColor: "#273edc" }}
					_focus={{ outline: "none" }}
					color="white"
					width="95%"
					mx="auto"
					onClick={(e) => {
						router.push("/singlecar");
					}}
				>
					Details
				</Button>
			</Flex>
		</Box>
	);
}
