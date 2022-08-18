import {
	Box,
	Container,
	Flex,
	Input,
	Button,
	Image,
	Heading,
	Text,
	Checkbox,
	RadioGroup,
	Stack,
	Radio,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

function Signup() {
<<<<<<< HEAD
  const router = useRouter();

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
            <Text color="#F8ECD1">Do you already have an account?</Text>
            <Button
              my={5}
              className="primaryButton"
              backgroundColor="#4258EF"
              _hover={{ backgroundColor: "#273edc" }}
              _focus={{ outline: "none" }}
              color="white"
              onClick={(e) => {
                router.push("/signin");
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Flex>
      <Flex boxShadow="lg" borderRadius={10} margin="auto" width="40vw">
        <Box margin="auto" px="2rem">
          <Heading my="1.5rem" textAlign="center">
            Sign Up to get started
          </Heading>
          <Text my="3" textAlign="center" opacity="0.5">
            Enter your details to proceed further
          </Text>
          <Input type="text" placeHolder="Email" my="1" />
          <Flex>
            <Input
              type="text"
              placeHolder="First name"
              my="1"
              width="50%"
              mr="1"
            />
            <Input type="text" placeHolder="Last name" my="1" width="50%" />
          </Flex>
          <Input type="number" placeHolder="Mobile number" my="1" />
=======
	const router = useRouter();
	const [step, setStep] = useState(1);
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
						<Text color="#F8ECD1">
							Do you already have an account?
						</Text>
						<Button
							my={5}
							className="primaryButton"
							backgroundColor="#4258EF"
							_hover={{ backgroundColor: "#273edc" }}
							_focus={{ outline: "none" }}
							color="white"
							onClick={(e) => {
								router.push("/signin");
							}}
						>
							Sign in
						</Button>
					</Box>
				</Box>
			</Flex>
			{step === 1 && (
				<Flex
					boxShadow="lg"
					borderRadius={10}
					margin="auto"
					width="40vw"
				>
					<Box margin="auto" px="2rem">
						<Heading
							mb="1.5rem"
							textAlign="center"
							textTransform="uppercase"
						>
							{`Let's get started`}
						</Heading>
>>>>>>> c684fc1276918f3c52cc8d1b0a75259a375a94e9

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have a smartphone">
								I have a smartphone
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

<<<<<<< HEAD
          <Button
            my={5}
            className="primaryButton"
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            width="100%"
            onClick={(e) => {
              router.push("/payementsucess");
            }}
          >
            Continue
          </Button>
        </Box>
      </Flex>
    </Container>
  );
=======
						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have a guarantor">
								I have a guarantor
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have a valid drivers license">
								I have a valid drivers license
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I am 25 or Older">
								I am 25 or Older
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I am eligible on ride-hailing platforms (e.g: uber, taxify, etc)">
								I am eligible on ride-hailing platforms (uber,
								taxify, etc)
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have my BVN">I have my BVN</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have a bank statement">
								I have a bank statement
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have my NIN">I have my NIN</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have application fee (N10,000.00)">
								I have application fee (N10,000.00)
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Box
							py={2}
							display="flex"
							justifyContent="space-between"
						>
							<label id="I have my electricity bill/prove of residence">
								I have my electricity bill/prove of residence
							</label>
							<RadioGroup defaultValue="2">
								<Stack spacing={3} direction="row">
									<Radio colorScheme="blue" value="Yes">
										Yes
									</Radio>
									<Radio colorScheme="blue" value="No">
										No
									</Radio>
								</Stack>
							</RadioGroup>
						</Box>

						<Button
							my={5}
							className="primaryButton"
							backgroundColor="#4258EF"
							_hover={{ backgroundColor: "#273edc" }}
							_focus={{ outline: "none" }}
							color="white"
							width="100%"
							onClick={(e) => {
								setStep(2);
							}}
						>
							Continue
						</Button>
					</Box>
				</Flex>
			)}
			{step === 2 ? (
				<Flex
					boxShadow="lg"
					borderRadius={10}
					marginX="auto"
					mt={10}
					maxW="40vw"
				>
					<Box margin="auto" px="2rem">
						<Heading
							mb="1.5rem"
							textAlign="center"
							textTransform="uppercase"
						>
							Sign Up to get started
						</Heading>
						<Text my="3" textAlign="center" opacity="0.5">
							Enter your details to proceed further
						</Text>
						<Input type="text" placeHolder="Email" my="1" />
						<Flex>
							<Input
								type="text"
								placeHolder="First name"
								my="1"
								width="50%"
								mr="1"
							/>
							<Input
								type="text"
								placeHolder="Last name"
								my="1"
								width="50%"
							/>
						</Flex>
						<Input
							type="number"
							placeHolder="Mobile number"
							my="1"
						/>

						<Input type="text" placeHolder="Password" />
						<Input
							type="password"
							placeHolder="Confirm password"
							my="1"
						/>

						<Button
							my={5}
							className="primaryButton"
							backgroundColor="#4258EF"
							_hover={{ backgroundColor: "#273edc" }}
							_focus={{ outline: "none" }}
							color="white"
							width="100%"
						>
							Continue
						</Button>
					</Box>
				</Flex>
			) : null}
		</Container>
	);
>>>>>>> c684fc1276918f3c52cc8d1b0a75259a375a94e9
}

export default Signup;
