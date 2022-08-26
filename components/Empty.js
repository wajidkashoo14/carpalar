import React from "react";
import { Flex, Image, Text, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Empty = ({ title, message }) => {
	const router = useRouter();
	return (
		<Flex
			mt="2rem"
			justifyContent="center"
			alignItems="center"
			minH="50vh"
			flexDir="column"
		>
			{/* <FaWpforms
        fontSize="100"
        color="#4258EF"
        opacity={0.8}
    /> */}
			<Image src="/icons/empty.png" />
			<Heading>{title}</Heading>
			<Text my="6">{`${message}`}</Text>
			<Button
				backgroundColor="#4258EF"
				_hover={{ backgroundColor: "#273edc" }}
				_focus={{ outline: "none" }}
				color="white"
				p="6"
				onClick={() => router.push("/explore")}
			>
				Explore Inventory
			</Button>
		</Flex>
	);
};

export default Empty;
