import { Container, Flex, Heading, Text, Input } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "../../styles/footer.module.css";

function Footer() {
	return (
		<Container
			display="flex"
			justifyContent="space-evenly"
			alignItems="center"
			p="5"
			height="50vh"
			maxW="100%"
			bg="#000"
			gap="5"
			borderTopLeftRadius="200px"
			pt="5rem"
			mt="-8rem"
		>
			<Flex flexDir="column" gap="5">
				<Heading fontSize="lg" fontWeight="bold" color="#FFFFFF">
					Carparlar
				</Heading>

				<Text fontSize="sm" color="#FFFFFF" width="20rem">
					{` Carpalar is a genuine and notable digital car leasing brand that aims at ensuring ownership of automobiles in the most convenient way. Simply refer to Carpalar as a financial technology brand that provides cars and buses to interested individuals or brands via hire purchase`}
				</Text>
			</Flex>

			<Flex flexDir="column" gap="5">
				<Heading fontSize="lg" color="#FFFFFF">
					Office
				</Heading>
				<Text color="#bcb3c6">2 Martins Street</Text>
				<Text color="#bcb3c6">Lagos Nigeria</Text>
				<Text color="#bcb3c6">
					<Link href="mailto: info@carpalar.com">
						info@carpalar.com
					</Link>
				</Text>
				<Text color="#bcb3c6">+234 903000 9458</Text>
			</Flex>
			<Flex flexDir="column" color="#FFFFFF" gap="5">
				<Heading fontSize="lg">Links</Heading>
				<Link href="/" passHref>
					<Text color="#bcb3c6" className={styles.text}>
						Home
					</Text>
				</Link>

				<Link href="/#howitworks" passHref>
					<Text color="#bcb3c6" className={styles.text}>
						How it works
					</Text>
				</Link>

				<Link href="/explore" passHref>
					<Text color="#bcb3c6" className={styles.text}>
						Explore cars
					</Text>
				</Link>
				<Link href="/aboutus" passHref>
					<Text color="#bcb3c6" className={styles.text}>
						About us
					</Text>
				</Link>
			</Flex>

			<Flex flexDir="column" gap="5">
				<Heading mt="-10" fontSize="lg" color="#FFFFFF">
					Follow us
				</Heading>
				<Flex gap="5" mb="20">
					<Link href="https://www.instagram.com/carpalarhq" passHref>
						<FaFacebook fontSize="26px" color="#FFFFFF" />
					</Link>

					<Link
						href="https://www.facebook.com/carpalarhq"
						backgroundColor="black"
						passHref
					>
						<FaInstagram fontSize="26px" color="#FFFFFF" />
					</Link>

					<Link
						href="https://api.whatsapp.com/send?phone=2349030009486&text=Hello"
						target="_blank"
						passHref
					>
						<FaWhatsapp fontSize="26px" color="#FFFFFF" />
					</Link>
				</Flex>
			</Flex>
		</Container>
	);
}

export default Footer;
