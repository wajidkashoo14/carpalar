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
  Select,
  useToast,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { createCustomer } from "../../utils/services/customers";
import Cookies from "js-cookie";

import firebaseApp from "../../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
function Signup() {
  const Toast = useToast();

  const formRef = useRef(null);
  const router = useRouter();
  const [values, setValues] = useState({
    smartphone: false,
    guarantor: false,
    license: false,
    age: false,
    bvn: false,
    eligible: false,
    bank: false,
    nin: false,
    fee: false,
    bill: false,
  });
  useEffect(() => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const token = Cookies.get("token")
      ? JSON.parse(Cookies.get("token"))
      : null;
    console.log("dd", user, token);
    if (user && user._id && token) {
      router.push("/user/dashboard");
    }
  }, [router]);
  const [title, setTitle] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(null);
  const [error, setError] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  function checkValues() {
    let checker = Object.values(values).every((val) => val === true);
    console.log("checker", checker);
    if (checker) {
      setStep(2);
    } else {
      setError(true);
    }
  }
  // async function onSubmitHandler(e) {
  // 	e.preventDefault();
  // 	console.log("in captacha");
  // 	const inputValues = {};
  // 	const s2 = formRef.current[5].value;
  // 	const s1 = formRef.current[6].value;
  // 	const match = s1.normalize() === s2.normalize();
  // 	if (!match) {
  // 		setPasswordMismatch(true);
  // 		return;
  // 	}

  // 	for (let index = 0; index < formRef.current.length; index++) {
  // 		const name = formRef.current[index].name;
  // 		const value = formRef.current[index].value;
  // 		inputValues[name] = value;
  // 	}
  // 	console.log(auth);

  // 	window.recaptchaVerifier = new RecaptchaVerifier(
  // 		"recaptcha-container",
  // 		{
  // 			size: "invisible",
  // 			callback: (response) => {
  // 				// reCAPTCHA solved, allow signInWithPhoneNumber.
  // 				//   onSignInSubmit();
  // 				console.log("verify", response);
  // 				signInWithPhoneNumber(
  // 					auth,
  // 					`+91${inputValues.mobile}`,
  // 					window.recaptchaVerifier
  // 				)
  // 					.then((result) => {
  // 						// setfinal(result);
  // 						alert("code sent");
  // 						// setshow(true);
  // 						console.log("result", result);
  // 					})
  // 					.catch((err) => {
  // 						alert(err);
  // 						window.location.reload();
  // 					});
  // 			},
  // 		},
  // 		auth
  // 	);
  // }
  function onSignUpSubmit() {
    console.log("in onSignUpSubmit");
    const captchaVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+917006078236`, captchaVerifier)
      .then((result) => {
        // setfinal(result);
        alert("code sent");
        window.confirmationCode = result;
        // setshow(true);
        console.log("result", result);
      })
      .catch((err) => {
        alert(err);
        console.log("sigin fail code no", err);
        // window.location.reload();
      });
  }
  function onCaptchaVerify() {
    console.log("in captach");

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          console.log("captach sol", response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          setStep(3);
          onSignUpSubmit();
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          console.log("captcha expired");
        },
      },
      auth
    );
    console.log("in  return");
    window.recaptchaVerifier.render();
    // console.log("recaptchaVerifier", window.recaptchaVerifier);
  }

  function verifyCode(resp) {
    console.log("verifyCode res", resp);
    window.confirmationCode
      .confirm(otp)
      .then((resp) => console.log("OTP confirmed", resp))
      .catch((err) => console.log("OTP CONFIRM ERR", err));
  }
  async function onSubmitHandler(e) {
    e.preventDefault();

    const inputValues = {};
    const s2 = formRef.current[5].value;
    const s1 = formRef.current[6].value;
    const match = s1.normalize() === s2.normalize();
    console.log("pass", s1);
    console.log("pass", s2);
    if (!match) {
      setPasswordMismatch(true);
      return;
    }

    for (let index = 0; index < formRef.current.length; index++) {
      const name = formRef.current[index].name;
      const value = formRef.current[index].value;
      if (name && value) {
        inputValues[name] = value;
      }
    }
    console.log("in submit inputValues", inputValues);

    try {
      const resp = await createCustomer(inputValues);
      if (resp.status === 200) {
        Toast({
          title: "Registered successfully!, Please login",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        router.push("/signin");
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
      px={{ base: "1rem", md: "3rem" }}
      mt="-2rem"
      mb="15rem"
      pt={{ base: "5vh", md: "15vh" }}
    >
      <Flex maxW="50%" display={{ base: "none", md: "flex" }}>
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
      {step === 1 && (
        <Flex
          boxShadow="lg"
          borderRadius={10}
          mt={10}
          width={{ base: "100%", md: "40vw" }}
        >
          <Box margin="auto" px="2rem">
            <Heading mb="3.5rem" textAlign="center" textTransform="uppercase">
              {`Let's get started`}
            </Heading>

            <Stack spacing={2} direction="column">
              <Checkbox
                colorScheme="green"
                isChecked={values.smartphone}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    smartphone: !prev.smartphone,
                  }));
                }}
              >
                I have a smartphone
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.guarantor}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    guarantor: !prev.guarantor,
                  }));
                }}
              >
                I have a guarantor
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.license}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    license: !prev.license,
                  }));
                }}
              >
                I have a license
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.age}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    age: !prev.age,
                  }));
                }}
              >
                I am 25 or Older
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.eligible}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    eligible: !prev.eligible,
                  }));
                }}
              >
                I am eligible on ride-hailing platforms (uber, taxify, etc)
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.bvn}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    bvn: !prev.bvn,
                  }));
                }}
              >
                I have my BVN
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.bank}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    bank: !prev.bank,
                  }));
                }}
              >
                I have a bank statement
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.nin}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    nin: !prev.nin,
                  }));
                }}
              >
                I have my NIN
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.fee}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    fee: !prev.fee,
                  }));
                }}
              >
                I have application fee (N10,000.00)
              </Checkbox>
              <Checkbox
                colorScheme="green"
                isChecked={values.bill}
                onChange={(e) => {
                  if (error) {
                    setError(false);
                  }
                  setValues((prev) => ({
                    ...prev,
                    bill: !prev.bill,
                  }));
                }}
              >
                I have my electricity bill/prove of residence
              </Checkbox>
            </Stack>
            {error && (
              <Text
                border="1px solid red"
                borderRadius="5px"
                p="1"
                my="2"
                color="red"
              >
                {`You don't meet minimum eligibiity criteria`}
              </Text>
            )}
            <Button
              my={5}
              className="primaryButton"
              backgroundColor="#4258EF"
              _hover={{ backgroundColor: "#273edc" }}
              _focus={{ outline: "none" }}
              color="white"
              width="100%"
              onClick={checkValues}
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
            <Heading mb="1rem" textAlign="center" textTransform="uppercase">
              Sign Up to get started
            </Heading>
            <Text my="1" textAlign="center" opacity="0.5">
              Enter your details to proceed further
            </Text>
            {passwordMismatch && (
              <Text
                cole="red"
                p="1"
                my="2"
                mx="0"
                color="red"
                borderRadius="5px"
                border="1px solid red"
              >
                Passwords do not match
              </Text>
            )}
            <form width="100%" ref={formRef} onSubmit={onSubmitHandler}>
              <Input
                name="mobile"
                required
                type="number"
                placeHolder="Mobile Number"
                my="1"
              />
              <Input
                name="email"
                required
                type="email"
                placeHolder="Email"
                my="1"
              />
              <Flex>
                <Select
                  required
                  name="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Pick title
                  </option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </Select>
                <Input
                  name="firstName"
                  required
                  type="text"
                  placeHolder="First name"
                  my="1"
                  width="50%"
                  mr="1"
                />
                <Input
                  name="lastName"
                  required
                  type="text"
                  placeHolder="Last name"
                  my="1"
                  width="50%"
                />
              </Flex>

              <Input
                name="password"
                required
                type="password"
                placeHolder="Password"
                isInvalid={passwordMismatch}
                my="1"
              />
              <Input
                name="confirmPassword"
                required
                type="password"
                placeHolder="Confirm password"
                my="1"
                isInvalid={passwordMismatch}
              />

              <Button
                id="register"
                type="submit"
                my={5}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                width="100%"
              >
                Register
              </Button>
            </form>
          </Box>
        </Flex>
      ) : null}
      {step === 3 ? (
        <>
          <Input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button
            my={5}
            className="primaryButton"
            backgroundColor="#4258EF"
            _hover={{ backgroundColor: "#273edc" }}
            _focus={{ outline: "none" }}
            color="white"
            width="100%"
            onClick={verifyCode}
          >
            Verify
          </Button>
        </>
      ) : null}
    </Container>
  );
}

export default Signup;
