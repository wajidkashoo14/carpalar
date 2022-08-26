import {
	Box,
	Button,
	Container,
	Flex,
	Text,
	Heading,
	Image,
	Img,
	Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import styles from "../../../styles/dashboard.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { FaWpforms } from "react-icons/fa";
import { getAllApplications } from "../../../utils/services/application.service";
import Empty from "../../../components/Empty";

function Index() {
	const router = useRouter();
	const [Applications, setApplications] = useState([]);
	useEffect(() => {
		const token = Cookies.get("token")
			? JSON.parse(Cookies.get("token"))
			: null;
		const user = Cookies.get("user")
			? JSON.parse(Cookies.get("user"))
			: null;
		console.log(token);
		if (user && token) {
			getAllApplications(token)
				.then((data) => {
					console.log("applications", data);
					setApplications(data);
				})
				.catch((err) => console.log("applications err", err));
		} else {
			router.push("/login");
		}
	}, []);

	return (
		<DashboardLayout>
			<Container
				mb="20rem"
				pt="5rem"
				marginRight="auto"
				maxWidth="100%"
				height="100vh"
			>
				{Applications && Applications.length > 0 ? (
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
								width={400}
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
									<Heading fontSize="1.1rem">Amount</Heading>
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
								onClick={() => {
									router.push(
										"/user/Applications/applicationdetails"
									);
								}}
							>
								View Details
							</Button>
						</Flex>
					</Flex>
				) : (
					<Empty
						title="No Applications Found"
						message="You have not Applied for any Vehicles"
					/>
				)}
			</Container>
		</DashboardLayout>
	);
}

export default Index;
