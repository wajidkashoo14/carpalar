import {
	Container,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
	Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

function Accordian() {
	return (
		<Box minH="100vh" pt="17vh" mb="5rem">
			<Box
				display="flex"
				justifyContent="center"
				flexDir="column"
				alignItems="center"
				bg="#F2F5FB"
				borderRadius="20"
				w="80vw"
				mx={"auto"}
				mb="3rem"
				py="10"
				// mb="3rem"
			>
				<Heading textAlign="center" mb="3rem">
					Frequently Asked Questions
				</Heading>
				<Flex
					w="100%"
					justifyContent="space-between"
					alignItems="center"
				>
					<Accordion allowToggle w="46%">
						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Do you offer any sort of warranty?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4} textAlign="left">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										When should I get my oil changed?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										How do I check my tire pressure?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										How often should I rotate my tires?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
					<Accordion allowToggle w="46%">
						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										What is Auto Detailing?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Is it urgent to fix an oil leak?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										What causes brake pulsation?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box
										flex="1"
										textAlign="left"
										border="none"
									>
										Why is it important to rotate tires?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Flex>
				<Link href="/aboutus" passHref>
					<Button
						mt="10"
						className="primaryButton"
						backgroundColor="#4258EF"
						_hover={{ backgroundColor: "#273edc" }}
						_focus={{ outline: "none" }}
						color="white"
					>
						Learn more
					</Button>
				</Link>
			</Box>
		</Box>
	);
}

export default Accordian;
