import { Container, Button, Heading, Box } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/hero.module.css";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

function Hero() {
	const router = useRouter();
	return (
		<Container className={styles.hero} maxW="100%" pt="5vh">
			<Heading
				textTransform="uppercase"
				as="h2"
				size="l"
				textAlign="center"
				color="#4268E3"
				fontSize="1.8rem"
				maxW="60%"
				mt="10rem"
				fontWeight="bolder"
			>
				Attain your utmost desire,become a car owner with no pressured
				payment plan...
			</Heading>
			<Button
				my={5}
				className="primaryButton"
				backgroundColor="#4258EF"
				_hover={{ backgroundColor: "#273edc" }}
				_focus={{ outline: "none" }}
				color="white"
				onClick={() => router.push("/explore")}
			>
				Explore Cars &nbsp; <FaArrowRight color="white" />
			</Button>
		</Container>
	);
}

export default Hero;
