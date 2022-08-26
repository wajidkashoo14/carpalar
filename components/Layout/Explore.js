import { Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getVehicles } from "../../utils/services/vehicle.services";
import Singlecarcard from "./Singlecarcard";

function Explore(props) {
	const [vehicles, setVehicles] = useState([]);
	const router = useRouter();
	const { query } = router;
	const [args, setArgs] = useState({
		make: props?.make || query?.make || "",
		model: props?.model || query?.model || "",
		type: props?.type || query?.type || "",
	});

	console.log("params in cpn", props);
	console.log("args in cpn", args);
	useEffect(() => {
		console.log("router chnage");
		try {
			getVehicles().then((data) => {
				console.log("data", data);

				props.setParams({
					make: props?.make || query?.make || "",
					model: props?.model || query?.model || "",
					type: props?.type || query?.type || "",
				});
				console.log("data lentg", data.length);
				setVehicles(
					data.filter(
						(vehicle) =>
							vehicle.make.includes(props.make) ||
							vehicle.make.includes(query.make) ||
							vehicle.type.includes(props.type) ||
							vehicle.type.includes(query.type) ||
							vehicle.model.includes(props.model) ||
							vehicle.model.includes(query.model)
					)
				);
			});
		} catch (error) {
			console.log("failed to get cars", error);
		}
	}, [router.query]);
	console.log("query", router.query);
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
				vehicles.map((vehicle, idx) => (
					<Singlecarcard key={idx} vehicle={vehicle} />
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
	);
}

export default Explore;
