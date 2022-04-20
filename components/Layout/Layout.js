import { Box } from "@chakra-ui/react";
import React from "react";
import Contactstrip from "./Contactstrip";
import Navbar from "./Navbar";

function Layout() {
  return (
    <Box>
      <Contactstrip />
      <Navbar />
    </Box>
  );
}

export default Layout;
