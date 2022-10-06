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
				data-aos="fade-up"
				data-aos-offset="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-delay="300"
				data-aos-once="false"
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
										What is the Minimum weekly Payment?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4} textAlign="left">
								Weekly payments from as low as NGN 32000 per week or more spread over 24 Months (pre-owned vehicles) 
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										What is included in the contract?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Comprehensive insurance and vehicle tracking included in the value of the car.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Are the cars Nigerian or Foreign used?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								All our Cars are Foreign Used. We do not offer Nigerian Used Cars unless when a vehicle is being reassigned to a new driver.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Do I have the option to choose the type of car I want?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Yes - but this is from a list of cars that we have available at the time a driver application was processed.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
					<Accordion allowToggle w="46%">
						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Is making a down payment necessary?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Yes, we require a 13 percent down payment of the total value of the car before it can be picked up by the driver.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										I do not have an account with Bolt or Uber, can I still register and get a car?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								No, you must have active Bolt and Uber accounts before we assign a vehicle to you
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem py="3">
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										How long do I have to work with your car before it becomes mine?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								This depends on your devotions and desire to own the own car. Our contract is for 106 Weeks (including Saturdays and Sundays). Bulk and advance payments are accepted.
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
										What measures are in place against theft and accidents?
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Our cars are secured with Auto tracker and comprehensive Insurance.
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
