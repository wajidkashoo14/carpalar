import {
	Container,
	Image,
	Heading,
	Text,
	Button,
	Flex,
	Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
// import Image from "next/image";
import React from "react";

function Aboutcarpalar() {
	const router = useRouter();
	return (
		<Box width="100%" mt="20">
			<Flex width="80vw" m="auto" h="70vh">
				<Image
					alt="car"
					style={{ borderRadius: "50px" }}
					src="/homecar.jpg"
					h="30rem"
					w="50vw"
					//   layout="fixed"
				/>
				<Flex flexDir="column" px="5rem">
					<Heading mb="7" textTransform="uppercase" textAlign="left">
						About Carpalar
					</Heading>

					<Text textAlign="left" fontSize="lg" color="#1b171f">
						Carpalar is a genuine and notable digital car leasing
						brand that aims at ensuring ownership of automobiles in
						the most convenient way. Simply refer to Carpalar as a
						financial technology brand that provides cars and buses
						to interested individuals or brands via hire purchase.
						We help you secure an automobile of your choice with the
						deal of making an affordable down payment and spreading
						the remaining payment across 12-24 months. Carpalar
						provides neutral finance solutions for individuals and
						businesses looking to own a car
					</Text>
					<Button
						onClick={(e) => {
							router.push("/aboutus");
						}}
						my={10}
						className="primaryButton"
						backgroundColor="#4258EF"
						_hover={{ backgroundColor: "#273edc" }}
						_focus={{ outline: "none" }}
						color="white"
						w="fit-content"
					>
						Know More
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}

export default Aboutcarpalar;
