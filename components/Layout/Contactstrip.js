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
			px="12"
			justifyContent="space-between"
			boxShadow="xs"
		>
			<Flex alignItems="center" gap="10">
				<Flex alignItems="center" gap="5">
					<HiOutlineMail size="25" color="teal" />
					<Text fontSize="13px" color="gray.500">
						email:&nbsp;
						<Link
							_hover={{ textDecoration: "none" }}
							fontSize="15px"
							_after={{ display: "none" }}
							href="mailto:info@carpalar.com"
							target="_blank"
						>
							info@carpalar.com
						</Link>
					</Text>
				</Flex>

				<Flex alignItems="center" gap="5">
					<BsWhatsapp size="25" color="green" />
					<Text fontSize="13px" color="gray.500">
						Whatsapp:&nbsp;
						<Link
							_hover={{ textDecoration: "none" }}
							_after={{ display: "none" }}
							fontSize="15px"
							href="https://api.whatsapp.com/send?phone=2349030009486&text=Hello"
							target="_blank"
						>
							+234 903000 9486
						</Link>
					</Text>
				</Flex>
			</Flex>

			<Flex gap="18" alignItems="center">
				<Link
					href="https://www.facebook.com/carpalarhq"
					mx="2"
					id="social"
					target="_blank"
				>
					<FaFacebook size="20" color="blue" />
				</Link>

				<Link
					target="_blank"
					href="https://www.instagram.com/carpalarhq"
					id="social"
				>
					<FaInstagram size="20" color="red" />
				</Link>
			</Flex>
		</Container>
	);
}

export default Contactstrip;
