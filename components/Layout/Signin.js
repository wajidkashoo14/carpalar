import {
	Container,
	Flex,
	Box,
	Input,
	Button,
	Heading,
	useToast,
	Image,
	Text,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { signinCustomer } from "../../utils/services/customers";
import Cookies from "js-cookie";

function Signin() {
	const Toast = useToast();
	const formRef = useRef(null);
	const router = useRouter();
	useEffect(() => {
		const user = Cookies.get("user")
			? JSON.parse(Cookies.get("user"))
			: null;
		const token = Cookies.get("token")
			? JSON.parse(Cookies.get("token"))
			: null;
		console.log("dd", user, token);
		if (user && user._id && token) {
			router.push("/user/dashboard");
		}
	}, []);

	async function onSubmitHandler(e) {
		e.preventDefault();
		console.log("submmitting");
		const inputValues = {};

		for (let index = 0; index < formRef.current.length; index++) {
			const name = formRef.current[index].name;
			const value = formRef.current[index].value;
			inputValues[name] = value;
		}
		console.log("in submit", inputValues);

		try {
			const resp = await signinCustomer(inputValues);
			if (resp.status === 200) {
				Toast({
					title: "Login successful!, Please wait",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
				Cookies.set("token", JSON.stringify(resp.data.token));
				Cookies.set("user", JSON.stringify(resp.data.user));
				router.push("/user/dashboard");
			}
		} catch (error) {
			Toast({
				title: error.message,
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		}
	}
	return (
		<Container
			maxW="100%"
			minH="100vh"
			display="flex"
			alignItems="flex-start"
			px="3rem"
			mt="-2rem"
			mb="15rem"
			pt="15vh"
		>
			<Flex maxW="50%">
				<Box position="relative" mt={10}>
					<Image
						src="./homecar.jpg"
						alt="signup"
						w="90%"
						height="100%"
						style={{ borderRadius: "15px" }}
					/>
					<Heading
						position="absolute"
						top="5%"
						left="5%"
						fontSize="4rem"
						width="50%"
						color="#F8ECD1"
					>
						A new way to buy cars
					</Heading>
					<Box
						height="5rem"
						bg="transparent"
						mt="auto"
						w="90%"
						style={{ borderRadius: "15px" }}
						border="1px solid grey"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						px="10"
						position="absolute"
						bottom="0%"
						left="0"
					>
						<Text color="#F8ECD1">{`You don't have an account`}</Text>
						<Button
							my={5}
							className="primaryButton"
							backgroundColor="#4258EF"
							_hover={{ backgroundColor: "#273edc" }}
							_focus={{ outline: "none" }}
							color="white"
							onClick={(e) => {
								router.push("/signup");
							}}
						>
							Sign up
						</Button>
					</Box>
				</Box>
			</Flex>
			<Flex boxShadow="lg" borderRadius={10} margin="auto" width="40vw">
				<Box margin="auto" px="2rem" textAlign="center">
					<Heading my="1rem" width="100%" textTransform="uppercase">
						Sign In to your account
					</Heading>
					<Text my="1" opacity="0.5">
						Enter your details to proceed further
					</Text>
					<form onSubmit={onSubmitHandler} ref={formRef}>
						<Input
							required
							name="email"
							type="email"
							placeHolder="Email"
							my="2"
						/>
						<Input
							required
							name="password"
							type="password"
							placeHolder="Password"
							my="2"
						/>
						<Button
							my={5}
							className="primaryButton"
							backgroundColor="#4258EF"
							_hover={{ backgroundColor: "#273edc" }}
							_focus={{ outline: "none" }}
							color="white"
							width="100%"
							type="submit"
						>
							Sign in
						</Button>
					</form>
				</Box>
			</Flex>
		</Container>
	);
}

export default Signin;
