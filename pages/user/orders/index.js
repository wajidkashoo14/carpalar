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
			<Container maxW="100vw" height="100vh" pt="5rem" mb="30rem">
				{Orders && Orders.length > 0 ? (
					<Flex
						backgroundColor="#E9F3FC"
						borderRadius="1rem"
						marginTop={5}
						border="1px solid  #DCDCDC"
						boxShadow="lg"
					>
						<Box>
							<Img
								src="/homecar.jpg"
								height={250}
								style={{ borderRadius: "15px" }}
								overflow="hidden"
								alt="car"
								margin="auto"
							/>
						</Box>
						<Flex flexDir="column" width="100%">
							<Box marginTop="3rem" marginLeft="3rem">
								<Heading fontSize="1.4rem">
									2013 Sabaru Sorester Premium Plus
								</Heading>
								<span className={styles.dashboard__span}>
									wajid
								</span>
								<span className={styles.dashboard__span}>
									kashoo
								</span>
								<span className={styles.dashboard__span}>
									197
								</span>
							</Box>
							<Box display="flex" marginLeft="3rem" py={4}>
								<Box>
									<Heading fontSize="1.1rem">Address</Heading>
									<p>jk india</p>
								</Box>
								<Box px={6}>
									<Heading fontSize="1.1rem">Contact</Heading>
									<p>9596103894</p>
								</Box>
								<Box px={6}>
									<Heading fontSize="1.1rem">Gender</Heading>
									<p>Male</p>
								</Box>
								<Box px={6}>
									<Heading fontSize="1.1rem">
										{" "}
										Amount{" "}
									</Heading>
									<p>$14,000</p>
								</Box>
							</Box>
							<Button
								width="8rem"
								marginLeft="3rem"
								backgroundColor="#4258EF"
								_hover={{ backgroundColor: "#273edc" }}
								_focus={{ outline: "none" }}
								color="#ffffff"
								onClick={() => router.push("/user/orders/1212")}
							>
								View Details
							</Button>
						</Flex>
					</Flex>
				) : (
					<Empty
						title="No Sales Found"
						message="You do not have any active vehicle purchase with us
          at the moment"
					/>
				)}
			</Container>
		</DashboardLayout>
	);
}

export default Myproducts;
