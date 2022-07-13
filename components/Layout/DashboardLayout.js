import { Box, Flex } from "@chakra-ui/react";
import React, { Children } from "react";
import NavigationItems from "../UserDashBoard/NavigationItems";

const DashboardLayout = ({ children }) => {
  return (
    <Flex pt="1vh" w="100vw">
      <NavigationItems />
      {children}
    </Flex>
  );
};

export default DashboardLayout;
