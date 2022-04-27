import { Container } from "@chakra-ui/react";
import Aboutus from "../components/Layout/About";

import React from "react";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";

function aboutus() {
  return (
    <>
      <Layout />
      <Aboutus />
      <Footer />
    </>
  );
}

export default aboutus;
