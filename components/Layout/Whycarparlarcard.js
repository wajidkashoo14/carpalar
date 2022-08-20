import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Whycarparlarcard({ icon, content, delay }) {
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			flexDir="column"
			p={5}
			boxSize="16rem"
			bg="#fff"
			boxShadow={"sm"}
			gap="6"
			rounded={10}
			transition="all 0.2s ease-in-out"
			_hover={{
				boxShadow: "lg",
				transform: "translateY(-10px)",
				transition: "all 0.2s ease-in-out",
				// bg: "#4258EF",
				// color: "#fff",
			}}
			data-aos="fade-up"
			data-aos-delay={delay + 100}
			data-aos-offset="150"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			// data-aos-mirror="true"
			data-aos-once="false"
		>
			{/* <Text boxSize="80px" rounded="50%" bg="red" textAlign="center"> */}
			{icon}
			{/* </Text> */}
			<Text
				fontSize="sm"
				textAlign="center"
				fontWeight="medium"
				textTransform="capitalize"
			>
				{content}
			</Text>
		</Flex>
	);
}

export default Whycarparlarcard;
