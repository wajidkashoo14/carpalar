import {
	Container,
	Flex,
	Heading,
	Text,
	Divider,
	Box,
	Image,
} from "@chakra-ui/react";
import React from "react";

function Description() {
	return (
		<Container
			maxW="80vw"
			minH="100vh"
			textAlign="left"
			p="10"
			display="flex"
			alignItems="flex-start"
			flexDirection="column"
			justifyContent="flex-start"
		>
			<Heading width="100vw" mb="10">
				Description
			</Heading>
			<Text mb="10" fontSize="lg" width="100%" fontWeight="normal">
				{` Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
			</Text>

			<Text mb="10" fontSize="lg" fontWeight="normal">
				{`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`}
			</Text>
			<Box
				display="flex"
				flexDir="column"
				width="70%"
				// alignItems="center"
				justifyContent="center"
			>
				<Heading as="h2" mb="5" textAlign="left">
					Features
				</Heading>
				<Flex
					justifyContent="space-between"
					alignItems="center"
					mt="2"
					w="100%"
				>
					<Text>year</Text>
					<Text fontWeight="bold">2020</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />

				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>make</Text>
					<Text fontWeight="bold">Tesla</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />

				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>model</Text>
					<Text fontWeight="bold">GV24</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />

				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Fuel type</Text>
					<Text fontWeight="bold">Electric</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />

				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Mileage</Text>
					<Text fontWeight="bold">23</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />

				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Engine</Text>
					<Text fontWeight="bold">23nts</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />
				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Engine</Text>
					<Text fontWeight="bold">23nts</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />
				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Doors</Text>
					<Text fontWeight="bold">4</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />
				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Passengers</Text>
					<Text fontWeight="bold">5</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />
				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Total Cost</Text>
					<Text fontWeight="bold">$555,000</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />
				<Flex
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					mt="2"
				>
					<Text>Down Payment </Text>
					<Text fontWeight="bold">$50,000</Text>
				</Flex>
				<Divider width="100%" mx="auto" color="" p="2" />
			</Box>

			{/* second box start */}

			<Box
				display="flex"
				justifyContent="space-between"
				width="70%"
				flexDirection="column"
				alignItems="flex-start"
			>
				<Flex
					display="flex"
					//   justifyContent="center"
					width="80%"
					mt="10"
					flexDir="column"

					//   alignItems="flex-start"
				>
					<Heading as="h5" fontSize="md" width="10rem">
						Standard features include
					</Heading>
					<Box>
						<Flex
							justifyContent="space-between"
							alignItems="center"
							width="100%"
							mt="2"
						>
							<Text>air condition</Text>
							<Text fontWeight="bold">yes</Text>
						</Flex>
						<Divider width="100%" mx="auto" color="" p="2" />
						<Flex
							justifyContent="space-between"
							alignItems="center"
							width="100%"
							mt="2"
						>
							<Text>Radio</Text>
							<Text fontWeight="bold">No</Text>
						</Flex>
						<Divider width="100%" mx="auto" color="" p="2" />
						<Flex
							justifyContent="space-between"
							alignItems="center"
							width="100%"
							mt="2"
						>
							<Text>Audio Inputs</Text>
							<Text fontWeight="bold">yes</Text>
						</Flex>
						<Divider width="100%" mx="auto" color="" p="2" />
						<Flex
							justifyContent="space-between"
							alignItems="center"
							width="100%"
							mt="2"
						>
							<Text>Fog Lights</Text>
							<Text fontWeight="bold">yes</Text>
						</Flex>
						<Divider width="100%" mx="auto" color="" p="2" />
					</Box>
				</Flex>
			</Box>

			<Box mt="5" mb="10rem">
				<Heading>Reviews</Heading>
				<Flex
					justifyContent="flex-start"
					alignItems="center"
					ml="auto"
					mt="10"
				>
					<Image
						alt="car"
						src="./homecar.jpg"
						h="4rem"
						w="4rem"
						borderRadius="50%"
					/>
					<Text ml="5" fontWeight="600">
						Wajid huassain
					</Text>
				</Flex>
				<Text my="3">
					I like autumn in the seaon ans autumn in the symmer
				</Text>
				<Divider />
				<Flex
					justifyContent="flex-start"
					alignItems="center"
					ml="auto"
					mt="10"
				>
					<Image
						alt="car"
						src="./homecar.jpg"
						h="4rem"
						w="4rem"
						borderRadius="50%"
					/>
					<Text ml="5" fontWeight="600">
						Irfan Afzal
					</Text>
				</Flex>
				<Text my="3">
					I like autumn in the seaon ans autumn in the symmer
				</Text>
				<Divider />
				<Flex
					justifyContent="flex-start"
					alignItems="center"
					ml="auto"
					mt="10"
				>
					<Image
						alt="car"
						src="./homecar.jpg"
						h="4rem"
						w="4rem"
						borderRadius="50%"
					/>
					<Text ml="5" fontWeight="600">
						Hussain Ali
					</Text>
				</Flex>
				<Divider />
				<Text my="3">
					I like autumn in the seaon ans autumn in the symmer
				</Text>
			</Box>
		</Container>
	);
}

export default Description;
