import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import NavigationItems from "../UserDashBoard/NavigationItems";
import Cookies from "js-cookie";
import { RelationCountAttribute } from "typeorm/query-builder/relation-count/RelationCountAttribute";

const DashboardLayout = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		const user = Cookies.get("user")
			? JSON.parse(Cookies.get("user"))
			: null;
		const token = Cookies.get("token")
			? JSON.parse(Cookies.get("token"))
			: null;
		if (!token || !user) {
			router.push("/signin");
		}
	}, []);
	return (
		<Flex pt="1vh" w="100vw" justifyContent="flex-start">
			<NavigationItems />
			{children}
		</Flex>
	);
};

export default DashboardLayout;
