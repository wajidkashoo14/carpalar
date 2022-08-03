import { Box, Flex, Heading, Text, Img, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/dashboard.module.css";

function Applicationcard({ heading, input }) {
	return (
		<Flex justifyContent="center" alignItems="center" flexDir="column">
			<Heading fontSize="1.5rem" p={5}>
				{heading}
			</Heading>
			<Box
				display="flex"
				gap="3rem"
				py={2}
				mt={2}
				justifyContent="center"
				alignItems="center"
			>
				{input &&
					Object.keys(input).map((key, idx) => {
						return (
							<Box key={idx}>
								<Heading fontSize="1.1rem" py={2}>
									{key}
								</Heading>
								<p>{input[key]}</p>
							</Box>
						);
					})}
			</Box>
		</Flex>
	);
}

export default Applicationcard;
