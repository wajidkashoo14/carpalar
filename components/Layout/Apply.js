import {
  Container,
  Heading,
  Text,
  Box,
  extendTheme,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Apply() {
  const router = useRouter();

  const [license, setLicense] = useState("");
  const [bvn, setBvn] = useState("");
  const [nin, setNin] = useState("");
  const [gurantorOneNin, setgurantorOneNin] = useState("No");
  const [gurantorOneBvn, setgurantorOneBvn] = useState("No");
  const [gurantorTwoNin, setgurantorTwoNin] = useState("No");
  const [gurantorTwoBvn, setgurantorTwoBvn] = useState("No");

  const handleLicense = (e) => {
    const getLicense = e.target.value;
    setLicense(getLicense);
  };

  const handleBvn = (e) => {
    const getBvn = e.target.value;
    setBvn(getBvn);
  };
  const handleNin = (e) => {
    const getNin = e.target.value;
    setNin(getNin);
  };

  const handleGurantorOneNin = (e) => {
    const getNin = e.target.value;
    setgurantorOneNin(getNin);
  };
  const handleGurantorOneBvn = (e) => {
    const getBvn = e.target.value;
    setgurantorOneBvn(getBvn);
  };
  const handleGurantorTwoNin = (e) => {
    const getNin = e.target.value;
    setgurantorTwoNin(getNin);
  };
  const handleGurantorTwoBvn = (e) => {
    const getBvn = e.target.value;
    setgurantorTwoBvn(getBvn);
  };

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
  return (
    <Container
      maxW="100%"
      minH={{ base: "300vh", md: "100vh" }}
      pt="18vh"
      px={{ base: "1rem", md: "8rem" }}
      mb="15rem"
      textAlign="center"
    >
      <Heading color="black" my="5" textAlign="left">
        Apply Now
      </Heading>
      <Text color="black" width={{ base: "100%", md: "80vw" }} textAlign="left">
        {`To apply for a hire purchase car from us, you'll need to meet our
        eligibility criteria, and we continue to review it on an ongoing basis
        to keep up with industry best practices. Our basic eligibility
        requirements are listed below, however our compliance team may request
        for more information during the application process.`}
      </Text>
      <Text fontWeight="500" my="3" fontSize="18px" textAlign="left">
        Minimum Requirement
      </Text>
      {/* <Box textAlign="left">
        <Text>I have a smartphone</Text>
        <Text>I have a guarantor</Text>
        <Text>I have a valid drivers license</Text>
        <Text>I am 25 or Older</Text>
        <Text>
          I am eligible on ride-hailing platforms (e.g: uber, taxify, etc)
        </Text>
        <Text>I have my BVN</Text>
        <Text>I have a bank statement </Text>
        <Text>I have my NIN</Text>
        <Text>I have application fee (N10,000.00)</Text>
        <Text>I have my electricity bill/prove of residence</Text>
        <Text>
          Are you able to pay the initial deposit that is 10% value of the total
          amount
        </Text>
      </Box> */}
      <Box>
        <ChakraProvider theme={theme}>
          <Box
            p={{ base: "4", md: "8" }}
            display={{ base: "block", md: "flex" }}
            maxH="100vh"
          >
            <Box width={{ base: "100%", md: "45%" }} p={{ base: "2", md: "5" }}>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="">
                  <Input placeholder=" " />

                  <FormLabel>First name</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder=" " />

                  <FormLabel>Other Name</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input type="date" placeholder=" " id="dob" name="dob" />

                  <FormLabel htmlFor="dob">Date of birth</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select placeholder="Gender">
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option3">Other</option>
                  </Select>
                </Box>
              </FormControl>

              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder=" " id="address" name="address" />

                  <FormLabel htmlFor="address">Address</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    placeholder=" "
                    id="mobile number"
                    name="mobile number"
                  />

                  <FormLabel htmlFor="mobile number">Mobile Number</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    placeholder=" "
                    id="other number"
                    name="other number"
                  />

                  <FormLabel htmlFor="other number">Other Number</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input type="email" placeholder=" " id="email" name="email" />

                  <FormLabel htmlFor="email">Email</FormLabel>
                </Box>
              </FormControl>

              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    placeholder=" "
                    id="place of birth"
                    name="place of birth"
                  />

                  <FormLabel htmlFor="place of birth">Place of birth</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select placeholder="Gender">
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                  </Select>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select placeholder="Marital status">
                    <option value="option1">Single</option>
                    <option value="option2">Married</option>
                  </Select>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    type="number"
                    placeholder="eg 9"
                    id="years of experience"
                    name="years of experience"
                  />
                  <FormLabel htmlFor="years of experience">
                    Years of Driving Experience
                  </FormLabel>
                </Box>
              </FormControl>
            </Box>
            <Box
              width={{ base: "100%", md: "45%" }}
              p={{ base: "2", md: "5" }}
              mt="-1.3rem"
            >
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input id="nationality" name="nationality" />
                  <FormLabel htmlFor="nationality">Nationality</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select>
                    <option value="High school">High school</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                  </Select>
                  <FormLabel>Highest Academic Qualification</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input id="state of origin" name="state of origin" />
                  <FormLabel htmlFor="state of origin">
                    State of Origin
                  </FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input id="LGA" name="LGA" />
                  <FormLabel htmlFor="lga">LGA</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name">
                <Box my="5">
                  <Select
                    onChange={(e) => {
                      handleLicense(e);
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <FormLabel>Drivers License </FormLabel>
                </Box>
                {license === "Yes" && (
                  <FormControl variant="floating" id="first-name" isRequired>
                    <Box my="5">
                      <Input id="Licence Number" name="Licence Number" />
                      <FormLabel htmlFor="state of origin">
                        Licence Number
                      </FormLabel>
                    </Box>
                  </FormControl>
                )}
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input id="car applied for" name="car applied for" />
                  <FormLabel htmlFor="car applied for">
                    Car Applied for{" "}
                  </FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select>
                    <option value="option1">Yes</option>
                    <option value="option2">No</option>
                  </Select>
                  <FormLabel>
                    Are you currently driving for any ride-hailing platforms?
                    (eg. Uber or Taxify)
                  </FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="NIN" isRequired>
                <Box my="5">
                  <Select
                    onChange={(e) => {
                      handleNin(e);
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <FormLabel>NIN</FormLabel>
                </Box>
              </FormControl>
              {nin === "Yes" && (
                <FormControl variant="floating" id="NIN" isRequired>
                  <Box my="5">
                    <Input id="NIN" name="NIN Number" />
                    <FormLabel htmlFor="state of origin">NIN Number</FormLabel>
                  </Box>
                </FormControl>
              )}
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select
                    onChange={(e) => {
                      handleBvn(e);
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <FormLabel>BVN</FormLabel>
                </Box>
              </FormControl>
              {bvn === "Yes" && (
                <FormControl variant="floating" id="BVN Number" isRequired>
                  <Box my="5">
                    <Input id="BVN Number" name="Licence Number" />
                    <FormLabel htmlFor="state of origin">BVN Number</FormLabel>
                  </Box>
                </FormControl>
              )}
            </Box>
          </Box>

          <Heading pl={8} mt={{ base: "200%", md: "5rem" }}>
            Guarantors
          </Heading>
          <Text pl={8}>
            Someone who is willing to vouch for your character and background
          </Text>
          <Flex flexDir={{ base: "column", md: "row" }}>
            <Box p={8} width={{ base: "100%", md: "45%" }}>
              <Heading my={4}>Guarantor 1</Heading>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder="Name " id="Name" name="Name " />

                  <FormLabel htmlFor="Name ">Name </FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    placeholder="Relationship"
                    id="Relationship"
                    name="Relationship "
                  />

                  <FormLabel htmlFor="Relationship"> Relationship</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder="Phone" id="Phone" name="Phone " />

                  <FormLabel htmlFor="Phone"> Phone</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    placeholder="Home Address "
                    id="Home Address"
                    name="Home Address "
                  />

                  <FormLabel htmlFor="Home Address"> Home Address</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    placeholder="Job Title "
                    id="Job Title"
                    name="Job Title "
                  />

                  <FormLabel htmlFor="Job Title"> Job Title</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input
                    placeholder="Email Address"
                    id="Email Address"
                    name="Email Address "
                  />

                  <FormLabel>Email Address</FormLabel>
                </Box>
              </FormControl>

              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select
                    onChange={(e) => {
                      handleGurantorOneNin(e);
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <FormLabel>NIN</FormLabel>
                </Box>
              </FormControl>
              {gurantorOneNin === "Yes" && (
                <FormControl variant="floating" id="NIN" isRequired>
                  <Box my="5">
                    <Input id="NIN" name="NIN Number" />
                    <FormLabel htmlFor="state of origin">NIN Number</FormLabel>
                  </Box>
                </FormControl>
              )}
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select
                    onChange={(e) => {
                      handleGurantorOneBvn(e);
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <FormLabel>BVN</FormLabel>
                </Box>
              </FormControl>
              {gurantorOneBvn === "Yes" && (
                <FormControl variant="floating" id="BVN Number" isRequired>
                  <Box my="5">
                    <Input id="BVN Number" name="Licence Number" />
                    <FormLabel htmlFor="state of origin">BVN Number</FormLabel>
                  </Box>
                </FormControl>
              )}
            </Box>

            <Box p={8} width={{ base: "100%", md: "45%" }} mt={3}>
              <Heading my={4}>Guarantor 2</Heading>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder="Name " />

                  <FormLabel>Name</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder="Relationship" />

                  <FormLabel>Relationship</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder="Phone" />

                  <FormLabel>Phone</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder="Home Address " />

                  <FormLabel>Home Address</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Input placeholder="Job Title " />

                  <FormLabel>Job Title</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name">
                <Box my="5">
                  <Input placeholder="Email Address" />

                  <FormLabel>Email Address</FormLabel>
                </Box>
              </FormControl>
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select
                    onChange={(e) => {
                      handleGurantorTwoNin(e);
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <FormLabel>NIN</FormLabel>
                </Box>
              </FormControl>
              {gurantorTwoNin === "Yes" && (
                <FormControl variant="floating" id="NIN" isRequired>
                  <Box my="5">
                    <Input id="NIN" name="NIN Number" />
                    <FormLabel htmlFor="state of origin">NIN Number</FormLabel>
                  </Box>
                </FormControl>
              )}
              <FormControl variant="floating" id="first-name" isRequired>
                <Box my="5">
                  <Select
                    onChange={(e) => {
                      handleGurantorTwoBvn(e);
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                  <FormLabel>BVN</FormLabel>
                </Box>
              </FormControl>
              {gurantorTwoBvn === "Yes" && (
                <FormControl variant="floating" id="BVN Number" isRequired>
                  <Box my="5">
                    <Input id="BVN Number" name="Licence Number" />
                    <FormLabel htmlFor="state of origin">BVN Number</FormLabel>
                  </Box>
                </FormControl>
              )}
            </Box>
          </Flex>
        </ChakraProvider>
      </Box>
      <Button
        my={5}
        className="primaryButton"
        backgroundColor="#4258EF"
        _hover={{ backgroundColor: "#273edc" }}
        _focus={{ outline: "none" }}
        color="white"
        textAlign="center"
        onClick={(e) => {
          router.push("/applicationstatus");
        }}
      >
        Submit Application
      </Button>
    </Container>
  );
}

export default Apply;
