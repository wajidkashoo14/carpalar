import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getVehicles } from "../../utils/services/vehicle.services";
import Singlecarcard from "./Singlecarcard";
import { useRouter } from "next/router";

export default function Featuredcars() {
	const [notSmallerScreen] = useMediaQuery("(min-width:768px)");
	const [vehicles, setVehicles] = useState([]);
	const router = useRouter();
	useEffect(() => {
		try {
			getVehicles().then((data) => setVehicles(data));
		} catch (error) {
			console.log("failed to get cars", error);
		}
	}, []);

	return (
		<Box pb="20" mWidth="100%" textAlign="center">
			<Flex
				alignItems="center"
				p="10"
				flexDir="column"
				textAlign="center"
				pb="20"
			>
				<Heading as="h1" textTransform="uppercase" fontSize="40">
					EXPLORE CARS
				</Heading>
				<div
					style={{
						width: "200px",
						padding: "1.4px",
						backgroundColor: "#acb7fb",
					}}
				></div>
				<Text
					px={notSmallerScreen ? "20%" : "10%"}
					py="5"
					fontSize="20"
				>
					With Carpalar, a variety of luxurious cars are assured! Our
					customers enjoy the opportunity to select from a wide range
					of car brands, sizes, colors and shapes. Our cars and buses
					have all the necessary documents and are in their perfect
					conditions.
				</Text>
			</Flex>

			<Flex
				mt="-4"
				justifyContent="center"
				alignItems="center"
				flexWrap="wrap"
				width="80vw"
				margin="auto"
			>
				{vehicles?.length > 0 ? (
					vehicles.map((vehicle) => (
						<Singlecarcard vehicle={vehicle} />
					))
				) : (
					<Text
						textTransform="uppercase"
						fontSize={20}
						fontWeight={"bolder"}
						color="blue.400"
					>
						coming soon
					</Text>
				)}
			</Flex>

			{vehicles?.length > 0 && (
				<Button
					width="8rem"
					maxW="100vw"
					mx="auto"
					mt="5"
					textAlign="center"
					variant="solid"
					className="primaryButton"
					backgroundColor="#4258EF"
					_hover={{ backgroundColor: "#273edc" }}
					_focus={{ outline: "none" }}
					color="white"
					onClick={() => router.push("/explore")}
				>
					SHOW MORE
				</Button>
			)}
		</Box>
	);
}
