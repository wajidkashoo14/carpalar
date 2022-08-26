import {
	Container,
	Heading,
	ChakraProvider,
	FormControl,
	FormLabel,
	Input,
	extendTheme,
	Box,
	Flex,
	Button,
	Select,
	Text,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { updateUser } from "../../utils/services/customers";

function profile() {
	const [editMode, setEditMode] = useState(false);
	const [data, setData] = useState(null);
	useEffect(() => {
		const user = Cookies.get("user")
			? JSON.parse(Cookies.get("user"))
			: null;
		const token = Cookies.get("token")
			? JSON.parse(Cookies.get("token"))
			: null;
		if (!token || !user) {
			router.push("/signin");
			return;
		}
		setData({ user, token });
	}, []);
	const activeLabelStyles = {
		transform: "scale(0.85) translateY(-24px)",
	};

	const theme = extendTheme({
		components: {
			Form: {
				variants: {
					floating: {
						container: {
							_focusWithin: {
								label: {
									...activeLabelStyles,
								},
							},
							"input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
								{
									...activeLabelStyles,
								},
							label: {
								top: 0,
								left: 0,
								zIndex: 2,
								position: "absolute",
								backgroundColor: "white",
								pointerEvents: "none",
								mx: 3,
								px: 1,
								my: 2,
								transformOrigin: "left top",
							},
						},
					},
				},
			},
		},
	});
	function onSubmitHandler(e) {
		e.preventDefault();
		console.log("dara", data.user);
		updateUser(data.token, data.user)
			.then((data) => console.log("updated", data))
			.catch((err) => console.log("updat err", err));
	}
	const onChangeHandler = (e) => {
		setData({
			token: data.token,
			user: {
				...data.user,
				[e.target.name]: e.target.value,
			},
		});
	};
	return (
		<DashboardLayout>
			<Flex
				flexDir="column"
				alignItems="center"
				w="80%"
				mb="180px"
				px={5}
				mx="auto"
			>
				<Box bg="#030303" w="100%" p="7" color="#fff" borderRadius={10}>
					<Flex alignItems={"center"} justifyContent="space-between">
						<Heading fontSize="1.5rem">Account Information</Heading>
						<Button
							backgroundColor="#4258EF"
							_hover={{ backgroundColor: "#273edc" }}
							_focus={{ outline: "none" }}
							color="#ffffff"
							onClick={() =>
								setEditMode((prev) => {
									if (prev) {
										const user = Cookies.get("user")
											? JSON.parse(Cookies.get("user"))
											: null;
										if (user) {
											setData({ ...data, user });
										}
									}
									return !prev;
								})
							}
						>
							{editMode ? "Cancel Edit" : "Edit Profile"}
						</Button>
					</Flex>
					<Flex>
						<Text>Name </Text>&nbsp;
						<Text>Address </Text>&nbsp;
						<Text>Number </Text>&nbsp;
					</Flex>
				</Box>
				<Heading my={2}>{editMode ? "Update" : "View"} Profile</Heading>

				<ChakraProvider theme={theme}>
					<Box
						p={4}
						width="50%"
						mt={5}
						pointerEvents={editMode ? "" : "none"}
					>
						<FormControl
							variant="floating"
							id="first-name"
							isRequired
						>
							<Input
								onChange={onChangeHandler}
								active
								value={data ? data.user.firstName : ""}
								id="first-name"
								name="firstName"
							/>
							<FormLabel id="first-name">First name</FormLabel>
						</FormControl>
					</Box>
					<Box
						p={4}
						width="50%"
						pointerEvents={editMode ? "" : "none"}
					>
						<FormControl
							variant="floating"
							id="Last Name"
							isRequired
						>
							<Input
								onChange={(e) =>
									setData({ ...data, user: data.user })
								}
								value={data ? data.user.lastName : ""}
								name="lastName"
							/>
							<FormLabel>Last name</FormLabel>
						</FormControl>
					</Box>
					<Box
						p={4}
						pointerEvents={editMode ? "" : "none"}
						width="50%"
					>
						<FormControl variant="floating" id="Gender" isRequired>
							<Select
								variant="flushed"
								placeholder="Select Gender"
								p="4"
								value={data ? data.user.gender : ""}
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</Select>
							<FormLabel>Gender</FormLabel>
						</FormControl>
					</Box>
					<Box
						p={4}
						pointerEvents={editMode ? "" : "none"}
						width="50%"
					>
						<FormControl variant="floating" id="DOB" isRequired>
							<Input
								onChange={(e) =>
									setData({ ...data, user: data.user })
								}
								value={data ? data.user.dob : ""}
								name="dob"
								type="date"
							/>
							<FormLabel>DOB</FormLabel>
						</FormControl>
					</Box>
					<Box
						p={4}
						pointerEvents={editMode ? "" : "none"}
						width="50%"
					>
						<FormControl
							variant="floating"
							id="email address"
							isRequired
						>
							<Input
								onChange={(e) =>
									setData({ ...data, user: data.user })
								}
								value={data ? data.user.email : ""}
								name="email"
								type="email"
							/>
							<FormLabel>Email Address</FormLabel>
						</FormControl>
					</Box>
					<Box
						p={4}
						pointerEvents={editMode ? "" : "none"}
						width="50%"
					>
						<FormControl
							variant="floating"
							id="mobile number"
							isRequired
						>
							<Input
								onChange={(e) =>
									setData({ ...data, user: data.user })
								}
								value={data ? data.user.mobile : ""}
								name="mobile"
								type="number"
							/>
							<FormLabel>Mobile Number</FormLabel>
						</FormControl>
					</Box>
					<Flex width="50%" p={4} flexDir="column">
						<Heading fontSize="1.2rem" p={4}>
							Address
						</Heading>
						<Flex>
							<Box
								p={4}
								pointerEvents={editMode ? "" : "none"}
								width="50%"
							>
								<FormControl
									variant="floating"
									id="Street"
									isRequired
								>
									<Input
										onChange={(e) =>
											setData({
												...data,
												user: data.user,
											})
										}
										value={data ? data.user.street : ""}
										name="street"
										type="text"
									/>
									<FormLabel>Street</FormLabel>
								</FormControl>
							</Box>
							<Box
								p={4}
								pointerEvents={editMode ? "" : "none"}
								width="50%"
							>
								<FormControl
									variant="floating"
									id="area"
									isRequired
								>
									<Input
										onChange={(e) =>
											setData({
												...data,
												user: data.user,
											})
										}
										value={data ? data.user.area : ""}
										name="area"
										type="text"
									/>
									<FormLabel>Area</FormLabel>
								</FormControl>
							</Box>
						</Flex>
						<Flex>
							<Box
								p={4}
								pointerEvents={editMode ? "" : "none"}
								width="50%"
							>
								<FormControl
									variant="floating"
									id="country"
									isRequired
								>
									<Input
										onChange={(e) =>
											setData({
												...data,
												user: data.user,
											})
										}
										value={data ? data.user.country : ""}
										name="country"
										type="text"
									/>
									<FormLabel>Country</FormLabel>
								</FormControl>
							</Box>
							<Box
								p={4}
								pointerEvents={editMode ? "" : "none"}
								width="50%"
							>
								<FormControl
									variant="floating"
									id="State"
									isRequired
								>
									<Input
										onChange={(e) =>
											setData({
												...data,
												user: data.user,
											})
										}
										value={data ? data.user.state : ""}
										name="state"
										type="text"
									/>
									<FormLabel>State</FormLabel>
								</FormControl>
							</Box>
						</Flex>
						<Flex>
							<Box
								p={4}
								pointerEvents={editMode ? "" : "none"}
								width="50%"
							>
								<FormControl
									variant="floating"
									id="postal code"
									isRequired
								>
									<Input
										onChange={(e) =>
											setData({
												...data,
												user: data.user,
											})
										}
										value={data ? data.user.zipcode : ""}
										name="zipcode"
									/>
									<FormLabel>Postal Code</FormLabel>
								</FormControl>
							</Box>
						</Flex>
					</Flex>
				</ChakraProvider>
				<Button
					isDisabled={!editMode}
					backgroundColor="#4258EF"
					_hover={{ backgroundColor: "#273edc" }}
					_focus={{ outline: "none" }}
					color="#ffffff"
					ml={7}
					px={5}
					py={5}
					width={"50%"}
					onClick={onSubmitHandler}
				>
					Update
				</Button>
			</Flex>
		</DashboardLayout>
	);
}

export default profile;
