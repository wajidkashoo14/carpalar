import React, { useEffect, useState } from "react";
import Explore from "../components/Layout/Explore";
import { useRouter } from "next/router";

import {
	Container,
	Flex,
	Heading,
	Button,
	Text,
	Box,
	Select,
} from "@chakra-ui/react";
import { getVehicles } from "../utils/services/vehicle.services";
import Singlecarcard from "../components/Layout/Singlecarcard";
const years = [
	2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
	2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];
function ExplorePage() {
	const router = useRouter();
	const [vehicles, setVehicles] = useState([]);

	const { query } = router;
	const [params, setParams] = useState({
		make: query.make || "",
		model: query?.model || "",
		type: query?.type || "",
		year: "",
	});
	useEffect(() => {
		try {
			getVehicles().then((data) => {
				setVehicles(
					data.filter(
						(vehicle) =>
							vehicle.manufacturing_year
								.toLowerCase()
								.includes(params.year) &&
							vehicle.make.toLowerCase().includes(params.make) &&
							vehicle.vehicle_type
								.toLowerCase()
								.includes(params.type) &&
							vehicle.model.toLowerCase().includes(params.model)
					)
				);
			});
		} catch (error) {
			console.log("failed to get cars", error);
		}
	}, [params]);
	useEffect(() => {
		router.isReady && setParams({ ...router.query });
	}, [router]);
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
						MAKE
					</Text>
					<Select
						variant="filled"
						placeholder="Select Make"
						value={params.make}
						onChange={(e) => {
							setParams({ ...params, make: e.target.value });
						}}
					>
						<option value="tesla">Tesla</option>
						<option value="toyota">Toyota</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						MODEL
					</Text>
					<Select
						variant="filled"
						placeholder="Select Make"
						value={params.model}
						onChange={(e) => {
							setParams({ ...params, model: e.target.value });
						}}
					>
						<option value="x">X</option>
						<option value="y">Y</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						TYPE
					</Text>
					<Select
						variant="filled"
						placeholder="Select Make"
						value={params.type}
						onChange={(e) => {
							setParams({ ...params, type: e.target.value });
						}}
					>
						<option value="saloon">Saloon</option>
						<option value="tricycle">Tri cycle</option>
						<option value="minicar">Mini Car</option>
						<option value="suv">SUV</option>
						<option value="motocycle">Motorcycle</option>
					</Select>
				</Box>
				<Box>
					<Text my="1" fontSize="16px" textTransform="uppercase">
						YEAR
					</Text>
					<Select
						variant="filled"
						placeholder="Select Year"
						value={params.year}
						onChange={(e) => {
							setParams({ ...params, year: e.target.value });
						}}
					>
						{years.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</Select>
				</Box>
				{/* <Box>
					<Button
						my={10}
						className="primaryButton"
						backgroundColor="#4258EF"
						_hover={{ backgroundColor: "#273edc" }}
						_focus={{ outline: "none" }}
						color="white"
						w="100%"
						onClick={() => {
							setRefresh((prev) => !prev);
						}}
					>
						Filter
					</Button>
				</Box> */}
			</Flex>
			{/* <Explore params={params} setParams={setParams} /> */}
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
		</Container>
	);
}

export default ExplorePage;
