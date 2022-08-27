import {
	Container,
	Text,
	Flex,
	Box,
	Img,
	Heading,
	Image,
	Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/dashboard.module.css";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { Router, useRouter } from "next/router";
import Cookies from "js-cookie";
import { getAllSales } from "../../../utils/services/sale.service";
import { FaWpforms } from "react-icons/fa";
import Empty from "../../../components/Empty";

function Myproducts() {
	const router = useRouter();
	const [Orders, setOrders] = useState([]);
	useEffect(() => {
		const token = Cookies.get("token")
			? JSON.parse(Cookies.get("token"))
			: null;
		const user = Cookies.get("user")
			? JSON.parse(Cookies.get("user"))
			: null;
		console.log(token);
		if (user && token) {
			getAllSales(token)
				.then((data) => {
					console.log("Orders", data);
					setOrders(data);
				})
				.catch((err) => console.log("Orders err", err));
		} else {
			router.push("/login");
		}
	}, []);
	return (
		<DashboardLayout>
			<Box p="2" w="100%" minHeight="100vh" mb="8rem">
				{/* {Orders && Orders.length > 0 ? ( */}

				<>
					<Heading as="h1" my="3" textAlign="center">
						Purchases
					</Heading>
					<Flex
						minHeight="100vh"
						justifyContent="flex-start"
						alignItems="flex-start"
						my="5"
						w="100%"
						flexWrap="wrap"
					>
						<Flex
							onClick={() => {
								router.push("orders/121212");
							}}
							width="45%"
							m="15px"
							boxShadow="md"
							p="2"
							pl="0"
							role="group"
							cursor="pointer"
							transition="transform .2s"
							overflow="hidden"
							_hover={{
								transform: "scale(1.03)",
								transition: "transform .3s",
								bg: "#7a98ff33",
							}}
						>
							<Image
								transition="transform .2s"
								_groupHover={{
									transition: "transform .3s",
									transform: "scale(1.06)",
								}}
								src="/homecar.jpg"
								boxSize="180px"
								objectFit="cover"
							/>

							<Flex
								flexDir="column"
								alignItems="flex-end"
								width="100%"
							>
								<Flex
									mx="2"
									justifyContent="space-between"
									alignItems="flex-start"
								>
									<Heading w="70%" fontSize="1rem">
										2013 Sabaru Sorester Premium Plus
									</Heading>
									<Heading fontSize="1.5rem" ml="3">
										$3434.00
									</Heading>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="green.50"
									color="green"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Paid
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="red.50"
									color="red"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Pending
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="1"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Installments
										</Heading>
									</Box>
									<Text fontSize="1.3rem">
										17
										<span
											style={{
												padding: "3px",
												backgroundColor: "#fff5f5",
												color: "red",
												marginLeft: "5px",
												fontSize: "1rem",
											}}
										>
											33
										</span>
									</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="3"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Last Updated
										</Heading>
									</Box>
									<Text>2022-12-12</Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							onClick={() => {
								router.push("orders/121212");
							}}
							width="45%"
							m="15px"
							boxShadow="md"
							p="2"
							pl="0"
							role="group"
							cursor="pointer"
							transition="transform .2s"
							overflow="hidden"
							_hover={{
								transform: "scale(1.03)",
								transition: "transform .3s",
								bg: "#7a98ff33",
							}}
						>
							<Image
								transition="transform .2s"
								_groupHover={{
									transition: "transform .3s",
									transform: "scale(1.06)",
								}}
								src="/homecar.jpg"
								boxSize="180px"
								objectFit="cover"
							/>

							<Flex
								flexDir="column"
								alignItems="flex-end"
								width="100%"
							>
								<Flex
									mx="2"
									justifyContent="space-between"
									alignItems="flex-start"
								>
									<Heading w="70%" fontSize="1rem">
										2013 Sabaru Sorester Premium Plus
									</Heading>
									<Heading fontSize="1.5rem" ml="3">
										$3434.00
									</Heading>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="green.50"
									color="green"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Paid
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="red.50"
									color="red"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Pending
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="1"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Installments
										</Heading>
									</Box>
									<Text fontSize="1.3rem">
										17
										<span
											style={{
												padding: "3px",
												backgroundColor: "#fff5f5",
												color: "red",
												marginLeft: "5px",
												fontSize: "1rem",
											}}
										>
											33
										</span>
									</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="3"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Last Updated
										</Heading>
									</Box>
									<Text>2022-12-12</Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							onClick={() => {
								router.push("orders/121212");
							}}
							width="45%"
							m="15px"
							boxShadow="md"
							p="2"
							pl="0"
							role="group"
							cursor="pointer"
							transition="transform .2s"
							overflow="hidden"
							_hover={{
								transform: "scale(1.03)",
								transition: "transform .3s",
								bg: "#7a98ff33",
							}}
						>
							<Image
								transition="transform .2s"
								_groupHover={{
									transition: "transform .3s",
									transform: "scale(1.06)",
								}}
								src="/homecar.jpg"
								boxSize="180px"
								objectFit="cover"
							/>

							<Flex
								flexDir="column"
								alignItems="flex-end"
								width="100%"
							>
								<Flex
									mx="2"
									justifyContent="space-between"
									alignItems="flex-start"
								>
									<Heading w="70%" fontSize="1rem">
										2013 Sabaru Sorester Premium Plus
									</Heading>
									<Heading fontSize="1.5rem" ml="3">
										$3434.00
									</Heading>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="green.50"
									color="green"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Paid
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="red.50"
									color="red"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Pending
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="1"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Installments
										</Heading>
									</Box>
									<Text fontSize="1.3rem">
										17
										<span
											style={{
												padding: "3px",
												backgroundColor: "#fff5f5",
												color: "red",
												marginLeft: "5px",
												fontSize: "1rem",
											}}
										>
											33
										</span>
									</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="3"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Last Updated
										</Heading>
									</Box>
									<Text>2022-12-12</Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							onClick={() => {
								router.push("orders/121212");
							}}
							width="45%"
							m="15px"
							boxShadow="md"
							p="2"
							pl="0"
							role="group"
							cursor="pointer"
							transition="transform .2s"
							overflow="hidden"
							_hover={{
								transform: "scale(1.03)",
								transition: "transform .3s",
								bg: "#7a98ff33",
							}}
						>
							<Image
								transition="transform .2s"
								_groupHover={{
									transition: "transform .3s",
									transform: "scale(1.06)",
								}}
								src="/homecar.jpg"
								boxSize="180px"
								objectFit="cover"
							/>

							<Flex
								flexDir="column"
								alignItems="flex-end"
								width="100%"
							>
								<Flex
									mx="2"
									justifyContent="space-between"
									alignItems="flex-start"
								>
									<Heading w="70%" fontSize="1rem">
										2013 Sabaru Sorester Premium Plus
									</Heading>
									<Heading fontSize="1.5rem" ml="3">
										$3434.00
									</Heading>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="green.50"
									color="green"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Paid
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="red.50"
									color="red"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Pending
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="1"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Installments
										</Heading>
									</Box>
									<Text fontSize="1.3rem">
										17
										<span
											style={{
												padding: "3px",
												backgroundColor: "#fff5f5",
												color: "red",
												marginLeft: "5px",
												fontSize: "1rem",
											}}
										>
											33
										</span>
									</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="3"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Last Updated
										</Heading>
									</Box>
									<Text>2022-12-12</Text>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							onClick={() => {
								router.push("orders/121212");
							}}
							width="45%"
							m="15px"
							boxShadow="md"
							p="2"
							pl="0"
							role="group"
							cursor="pointer"
							transition="transform .2s"
							overflow="hidden"
							_hover={{
								transform: "scale(1.03)",
								transition: "transform .3s",
								bg: "#7a98ff33",
							}}
						>
							<Image
								transition="transform .2s"
								_groupHover={{
									transition: "transform .3s",
									transform: "scale(1.06)",
								}}
								src="/homecar.jpg"
								boxSize="180px"
								objectFit="cover"
							/>

							<Flex
								flexDir="column"
								alignItems="flex-end"
								width="100%"
							>
								<Flex
									mx="2"
									justifyContent="space-between"
									alignItems="flex-start"
								>
									<Heading w="70%" fontSize="1rem">
										2013 Sabaru Sorester Premium Plus
									</Heading>
									<Heading fontSize="1.5rem" ml="3">
										$3434.00
									</Heading>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="green.50"
									color="green"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Paid
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									justifyContent="space-between"
									borderRadius="5"
									py="1"
									px="2"
									my="1"
									fontWeight="medium"
									bg="red.50"
									color="red"
									boxShadow="inner"
									w="100%"
								>
									<Heading fontSize="1rem">
										Amount Pending
									</Heading>
									<Text>$2498.00</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="1"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Installments
										</Heading>
									</Box>
									<Text fontSize="1.3rem">
										17
										<span
											style={{
												padding: "3px",
												backgroundColor: "#fff5f5",
												color: "red",
												marginLeft: "5px",
												fontSize: "1rem",
											}}
										>
											33
										</span>
									</Text>
								</Flex>
								<Flex
									alignItems="flex-start"
									w="100%"
									fontWeight="medium"
									mb="3"
									px="2"
									justifyContent="space-between"
								>
									<Box>
										<Heading fontSize="1rem">
											Last Updated
										</Heading>
									</Box>
									<Text>2022-12-12</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</>
				{/* ) : (
					<Empty
						title="No Sales Found"
						message="You do not have any active vehicle purchase with us
          at the moment"
					/>
				)} */}
			</Box>
		</DashboardLayout>
	);
}

export default Myproducts;
