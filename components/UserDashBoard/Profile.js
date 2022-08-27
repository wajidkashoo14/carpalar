import {
	Box,
	Container,
	Img,
	Flex,
	Text,
	Image,
	Divider,
	Heading,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "../../styles/dashboard.module.css";

export default function Profile(props) {
	const [user, setUser] = useState(null);
	console.log("PRO)PS", props);
	const [profile, setProfile] = useState("");
	useEffect(() => {
		const user = Cookies.get("user")
			? JSON.parse(Cookies.get("user"))
			: null;
		const token = Cookies.get("token")
			? JSON.parse(Cookies.get("token"))
			: null;
		if (user && token) {
			setUser(user);
			fetch(
				`https://avatars.dicebear.com/api/initials/${user.firstName}.svg`
			)
				.then((res) => {
					console.log("res", res);
					setProfile(res.url);
				})
				.catch((err) => console.log("image rrr", err));
		}
	}, [setUser]);

	return (
		<Box padding={4} w="25vw" height="85vh" boxShadow="lg">
			<Flex
				display="flex"
				flexDir="column"
				alignItems="center"
				width="100%"
			>
				<Image
					src={profile}
					height={"80px"}
					width={"80px"}
					overflow="hidden"
					alt="car"
					marginBottom={2}
				/>

				<Heading fontSize="1.2rem">
					{user &&
						user.title + " " + user.firstName + " " + user.lastName}
				</Heading>

				<Text mt="2" color="gray.500" fontSize="14px">
					{user && user.email}
				</Text>
				<Text color="gray.500" fontSize="14px">
					{user && user.country_code}
					{user && user.mobile}
				</Text>
			</Flex>

			<Box w="100%" boxShadow="" py="4" px="3" mt="4" borderRadius="3">
				<Flex
					alignItems="flex-start"
					boxShadow="inner"
					mb="5"
					p="2"
					justifyContent="space-between"
				>
					<Box>
						<Heading fontSize="1rem" color="green.500">
							Total Spend
						</Heading>
						<Text
							fontWeight="light"
							color="gray.500"
							fontSize="14px"
						>
							Amount spend on platform
						</Text>
					</Box>
					<Text fontWeight="medium" color="green.500">
						$21212.00
					</Text>
				</Flex>
				{/* <Divider my="3" /> */}
				<Flex
					alignItems="flex-start"
					boxShadow="inner"
					mb="5"
					p="2"
					justifyContent="space-between"
				>
					<Box>
						<Heading fontSize="1rem" color="red.500">
							Amount Pending
						</Heading>
						<Text
							fontWeight="light"
							color="gray.500"
							fontSize="14px"
						>
							Amount owed to platform
						</Text>
					</Box>
					<Text fontWeight="medium" color="red.500">
						$21212.00
					</Text>
				</Flex>
				{/* <Divider my="3" /> */}
				<Flex
					alignItems="flex-start"
					boxShadow="inner"
					mb="5"
					p="2"
					justifyContent="space-between"
				>
					<Box>
						<Heading fontSize="1rem" color="green.500">
							Successfull Transactions
						</Heading>
						<Text
							fontWeight="light"
							color="gray.500"
							fontSize="14px"
						>
							Successfull transactions on platform
						</Text>
					</Box>
					<Text fontWeight="medium" color="green">
						59
					</Text>
				</Flex>
				{/* <Divider my="3" /> */}
				<Flex
					alignItems="flex-start"
					boxShadow="inner"
					p="2"
					justifyContent="space-between"
				>
					<Box>
						<Heading fontSize="1rem" color="orange">
							Pending Transactions
						</Heading>
						<Text
							fontWeight="light"
							color="gray.500"
							fontSize="14px"
						>
							Pending transactions on platform
						</Text>
					</Box>
					<Text fontWeight="medium" color="orange">
						12
					</Text>
				</Flex>
			</Box>
			{/* </Flex> */}
		</Box>
	);
}
