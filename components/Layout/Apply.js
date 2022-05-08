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
import React from "react";

function Apply() {
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
      minH="100vh"
      pt="18vh"
      px="8rem"
      mb="15rem"
      textAlign="center"
    >
      <Heading color="black" my="5" textAlign="left">
        Apply Now
      </Heading>
      <Text color="black" width="80vw" textAlign="left">
        To apply for a hire purchase car from us, you'll need to meet our
        eligibility criteria, and we continue to review it on an ongoing basis
        to keep up with industry best practices. Our basic eligibility
        requirements are listed below, however our compliance team may request
        for more information during the application process.
      </Text>
      <Text fontWeight="500" my="3" fontSize="18px" textAlign="left">
        Minimum Requirement
      </Text>
      <Box textAlign="left">
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
      </Box>
      <Box>
        <ChakraProvider theme={theme}>
          <Box p={8} display="flex">
            <Box width="45%" p="5">
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="">
                  <Input placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>First name</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Other Name</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Select variant="filled" placeholder="Gender">
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option3">Other</option>
                  </Select>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Address</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Mobile Number</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Other Number</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input type="email" placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Email</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input type="date" placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Date of birth</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Place of birth</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Select variant="filled" placeholder="Gender">
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                  </Select>
                </Box>
              </FormControl>
            </Box>
            <Box width="45%" p="5" mt="-1.3rem">
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Select variant="filled" placeholder="Marital status">
                    <option value="option1">Single</option>
                    <option value="option2">Married</option>
                  </Select>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input type="number" placeholder="eg 9" />
                  <FormLabel>Years of Driving Experience</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input />
                  <FormLabel>Nationality</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Select variant="filled">
                    <option value="High school">High school</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                  </Select>
                  <FormLabel>Highest Academic Qualification</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input />
                  <FormLabel>State of Origin</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input />
                  <FormLabel>LGA</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input />
                  <FormLabel>Drivers License </FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input />
                  <FormLabel>Car Applied for </FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Select variant="filled" placeholder="Gender">
                    <option value="option1">Yes</option>
                    <option value="option2">No</option>
                  </Select>
                  <FormLabel>
                    Are you currently driving for any ride-hailing platforms?
                    (eg. Uber or Taxify){" "}
                  </FormLabel>
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Heading pl={8} my="5">
            Guarantors
          </Heading>
          <Text pl={8}>
            Someone who is willing to vouch for your character and background
          </Text>
          <Flex>
            <Box p={8} width="45%" p="5">
              <Heading my={4}>Guarantor 1</Heading>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Name " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Name </FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Relationship" />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel> Relationship</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Phone" />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel> Phone</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Home Address " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel> Home Address</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Job Title " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel> Job Title</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Email Address" />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Email Address</FormLabel>
                </Box>
              </FormControl>
            </Box>
            <Box width="45%" p="5">
              <Heading my={4}>Guarantor 2</Heading>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Name " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Name</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Relationship" />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Relationship</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Phone" />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Phone</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Home Address " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Home Address</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Job Title " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Job Title</FormLabel>
                </Box>
              </FormControl>
              <FormControl
                variant="floating"
                id="first-name"
                isRequired
                isInvalid
              >
                <Box my="5">
                  <Input placeholder="Email Address" />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Email Address</FormLabel>
                </Box>
              </FormControl>
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
      >
        Submit Application
      </Button>
    </Container>
  );
}

export default Apply;
