import { Container, Select, Button } from "@chakra-ui/react";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { useState } from "react";
function Search() {
	const router = useRouter();
	const [params, setParams] = useState({ make: "", model: "", type: "" });
	return (
		<Container
			borderRadius="5"
			mt="-16"
			minw="50vw"
			maxW={{ base: "90vw", md: "60vw" }}
			bg="white"
			minH="20vh"
			maxH={{ base: "90vh", md: "20vh" }}
			boxShadow="lg"
			centerContent
			display={{ base: "block", md: "flex" }}
			flexDirection="row"
			justifyContent="space-evenly"
			alignItems="center"
			mb="20"
			bgColor="white"
			gap={{ base: "10" }}
			py={{ base: "8" }}
		>
			<Select
				maxW={{ base: "100%", md: "25%" }}
				variant="filled"
				placeholder="Select Make"
				my={{ base: "5" }}
				py={{ base: "2" }}
				value={params.make}
				onChange={(e) => {
					setParams({ ...params, make: e.target.value });
				}}
			>
				<option value="tesla">Tesla</option>
				<option value="toyota">Toyota</option>
			</Select>

			<Select
				maxW={{ base: "100%", md: "25%" }}
				variant="filled"
				placeholder="Select Model"
				my={{ base: "5" }}
				py={{ base: "2" }}
				value={params.model}
				onChange={(e) => {
					setParams({ ...params, model: e.target.value });
				}}
			>
				<option value="x">X</option>
				<option value="y">Y</option>
			</Select>

			<Select
				maxW={{ base: "100%", md: "25%" }}
				variant="filled"
				placeholder="Select Type"
				my={{ base: "5" }}
				py={{ base: "2" }}
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
			<Button
				className="primaryButton"
				px="8"
				fontWeight="normal"
				size="md"
				colorScheme="blue"
				backgroundColor="#4258EF"
				_hover={{ backgroundColor: "#273edc" }}
				_focus={{ outline: "none" }}
				width={{ base: "100%" }}
				onClick={() =>
					router.push({ pathname: "/explore", query: params })
				}
			>
				<BiSearchAlt /> &nbsp; SEARCH
			</Button>
		</Container>
	);
}

export default Search;
