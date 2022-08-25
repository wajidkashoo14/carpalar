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
  FormLabel,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { signinCustomer } from "../../utils/services/customers";
import Cookies from "js-cookie";
import firebaseApp from "../../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
const auth = getAuth(firebaseApp);

function Signin() {
  const Toast = useToast();
  const [otp, setOtp] = useState(null);
  const formRef = useRef(null);
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState(null);
  const [disableForm, setDisableForm] = useState(false);
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

  async function onSubmitHandler(e) {
    e.preventDefault();
    console.log("submmitting");
    const inputValues = {};

    for (let index = 0; index < formRef.current.length; index++) {
      const name = formRef.current[index].name;
      const value = formRef.current[index].value;
      inputValues[name] = value;
    }

    try {
      const resp = await signinCustomer(inputValues);
      if (resp.status === 200) {
        setData(resp.data);
        setDisableForm(true);
        onCaptchaVerify(resp.data);
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
  function onSignInSubmit(data) {
    console.log("in onSignInSubmit");
    const captchaVerifier = window.recaptchaVerifier;
    const number =
      data.user.country_code.toString() + data.user.mobile.toString();
    console.log("number", number);
    signInWithPhoneNumber(auth, number, captchaVerifier)
      .then((result) => {
        window.confirmationCode = result;
        setStep(3);
      })
      .catch((err) => {
        Toast({
          title: "Service down, Please try again later!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log("sigin fail code no", err);
        // window.location.reload();
      });
  }
  function onCaptchaVerify(data) {
    console.log("in captach");

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          console.log("captach sol", response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // setStep(3);
          onSignInSubmit(data);
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
  }

  function verifyCode(resp) {
    console.log("verifyCode res", resp);
    window.confirmationCode
      .confirm(otp)
      .then((resp) => {
        console.log("OTP confirmed", resp);
        Toast({
          title: "Login successful!, redirecting Please wait",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        Cookies.set("token", JSON.stringify(data.token));
        Cookies.set("user", JSON.stringify(data.user));
        router.push("/user/dashboard");
      })
      .catch((err) => {
        console.log("OTP CONFIRM ERR", err);
        Toast({
          title: "Wrong OPT, Please try again!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  }
  return (
    <Container
      maxW="100%"
      minH={{ base: "75vh", md: "100vh" }}
      display="flex"
      alignItems="flex-start"
      px={{ base: "1rem", md: "3rem" }}
      mt="-2rem"
      mb="15rem"
      pt={{ base: "10vh", md: "15vh" }}
    >
      <Flex maxW="50%" display={{ base: "none", md: "flex" }}>
        <Box position="relative" mt={{ base: "5", md: "10" }}>
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
      <Flex
        boxShadow="lg"
        borderRadius={10}
        mt={{ base: "3", md: "10" }}
        width={{ base: "100%", md: "40vw" }}
        minH={{ base: "80vh", md: "50vh" }}
      >
        {step === 1 && (
          <Box margin="auto" px="2rem" textAlign="center">
            <Heading my="1rem" width="100%" textTransform="uppercase">
              Sign In to your account
            </Heading>
            <Text my="2" opacity="0.5">
              {!disableForm
                ? "Enter your details to proceed further"
                : "Verify to continue"}
            </Text>
            <form onSubmit={onSubmitHandler} ref={formRef}>
              <Input
                required
                name="email"
                type="email"
                placeHolder="Email"
                my="2"
                isDisabled={disableForm}
              />
              <Input
                required
                name="password"
                type="password"
                placeHolder="Password"
                my="2"
                isDisabled={disableForm}
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
                isDisabled={disableForm}
              >
                Sign in
              </Button>

              <div id="recaptcha-container"></div>
            </form>
          </Box>
        )}

        {step === 3 ? (
          <Flex
            width="100%"
            flexDir="column"
            // justifyContent="center"
            alignItems="center"
            p="4"
          >
            <Text>
              {`One Time Password (OTP) has been send to you registered mobie number`}
            </Text>
            <Flex boxShadow="md" flexDir="column" w="100%" p="6">
              <Input
                placeholder="Enter OTP"
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
              <Button
                my={5}
                className="primaryButton"
                backgroundColor="#4258EF"
                _hover={{ backgroundColor: "#273edc" }}
                _focus={{ outline: "none" }}
                color="white"
                onClick={(e) => {
                  setStep(1);
                  setDisableForm(false);
                }}
              >
                Go back
              </Button>
            </Flex>
          </Flex>
        ) : null}
      </Flex>
    </Container>
  );
}

export default Signin;
