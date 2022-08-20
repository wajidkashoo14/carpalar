import { Flex, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getVehicles } from "../../utils/services/vehicle.services";
import Singlecarcard from "./Singlecarcard";

function Explore() {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		try {
			getVehicles().then((data) => setVehicles(data));
		} catch (error) {
			console.log("failed to get cars", error);
		}
	}, []);
	return (
		<Flex
			w="80vw"
			maxH="108vh"
			bg="#fff"
			mb="3rem"
			flexWrap="wrap"
			overflowY="scroll"
			scrl
			justifyContent="space-around"
			css={{
				"&::-webkit-scrollbar": {
					width: "4px",
				},
				"&::-webkit-scrollbar-track": {
					width: "6px",
					color: "red",
				},
				"&::-webkit-scrollbar-thumb": {
					borderRadius: "24px",
				},
			}}
		>
			{vehicles?.length > 0 ? (
				vehicles.map((vehicle) => <Singlecarcard vehicle={vehicle} />)
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
	);
}

export default Explore;
