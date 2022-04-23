import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import Carbanner from "../components/Layout/Carbanner";
import Search from "../components/Layout/Search";
import Info from "../components/Layout/Info";
import Howitworks from "../components/Layout/Howitworks";
import Featuredcars from "../components/Layout/Featuredcars";
import Reviews from "../components/Layout/Reviews";
export default function Home() {
  return (
    <>
      <Layout />
      <Hero />
      <Carbanner />
      <Search />
      <Info />
      <Howitworks />
      <Featuredcars />
      <Reviews />
    </>
  );
}
