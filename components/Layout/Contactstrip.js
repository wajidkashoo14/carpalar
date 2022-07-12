import { Container, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contactstrip() {
	return (
		<Container
			maxW="l00vw"
			height="2.2rem"
			bg="white"
			d="flex"
			px="20"
			justifyContent="space-between"
			boxShadow="xs"
		>
			<Flex alignItems="center" gap="10">
				<Flex alignItems="center" gap="5">
					<HiOutlineMail size="25" color="teal" />
					<Text fontSize="13px" color="gray.500">
						<Link href="mailto: info@carpalar.com">
							email: info@carpalar.com
						</Link>
					</Text>
				</Flex>

				<Flex alignItems="center" gap="5">
					<BsWhatsapp size="25" color="green" />
					<Text fontSize="13px" color="gray.500">
						Whatsapp: +234 903000 9486
					</Text>
				</Flex>
			</Flex>

			<Flex gap="18" alignItems="center">
				<Link
					href="https://www.facebook.com/carpalarhq"
					mx="2"
					id="social"
				>
					<FaFacebook size="20" color="blue" />
				</Link>
				<Link mx="2" id="social">
					<FaWhatsapp size="20" color="green" />
				</Link>
				<Link
					href="https://www.instagram.com/carpalarhq"
					mx="2"
					id="social"
				>
					<FaInstagram size="20" color="red" />
				</Link>
			</Flex>
		</Container>
	);
}

export default Contactstrip;
