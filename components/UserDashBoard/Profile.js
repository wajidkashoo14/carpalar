import { Box, Container, Img, Flex, Text, Heading } from "@chakra-ui/react";
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
		<Box
			padding={4}
			w="15vw"
			height="100vh"
			boxShadow="lg"
			position="relative"
		>
			<Box
				height="3rem"
				width="8rem"
				position="absolute"
				right="-5%"
				top="-3%"
				display="flex"
			>
				<Box marginTop="3.2rem" marginLeft=".5rem">
					<IoIosNotificationsOutline fontSize="1.5rem" />
				</Box>

				<Img
					src={profile}
					height={10}
					width={10}
					borderRadius="50%"
					style={{ borderRadius: "15px" }}
					overflow="hidden"
					alt="car"
					margin="auto"
					marginTop={10}
				/>
			</Box>
			<Flex
				display="flex"
				flexDir="column"
				alignItems="flex-start"
				marginTop={10}
				marginLeft="0"
				width="100%"
			>
				<Img
					src={profile}
					height={100}
					width={100}
					borderRadius="1rem"
					style={{ borderRadius: "15px" }}
					overflow="hidden"
					alt="car"
					marginTop={10}
					marginBottom={2}
				/>
				<p className={styles.dashboard__p}>Welcome,</p>
				<Heading fontSize="1.4rem">
					{user &&
						user.title + " " + user.firstName + " " + user.lastName}
				</Heading>

				<Text mt="2" color="gray.500" fontSize="14">
					{user && user.email}
				</Text>
				<Text color="gray.500" fontSize="14">
					{user && user.mobile}
				</Text>
			</Flex>

			<Flex marginTop={8} justifyContent="space-between">
				<Box>
					<Box pt={3}>
						<Heading fontSize="1rem">Total Spend</Heading>
						<p className={styles.dashboard__p__second}>
							Amount spend on platform
						</p>
					</Box>
					<Box pt={3}>
						{/* <Heading fontSize="1rem">Income</Heading>
            <p className={styles.dashboard__p__second}>Amount minus fee</p>
          </Box>
          <Box pt={3}>
            <Heading fontSize="1rem">Bids</Heading>
            <p className={styles.dashboard__p__second}>
              Amount of auction bids
            </p> */}
					</Box>
				</Box>
				<Box pt={3} mr={5}>
					<p className={styles.dashboard__p__first}>$268,987</p>
					{/* <p className={styles.dashboard__p__sec}>$174,987</p>
          <p className={styles.dashboard__p__third}>219</p> */}
				</Box>
			</Flex>
		</Box>
	);
}
