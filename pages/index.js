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
import Footer from "../components/Layout/Footer";
import Aboutcarpalar from "../components/Layout/Aboutcarpalar";
import Whycarpalar from "../components/Layout/Whycarpalar";
export default function Home() {
	return (
		<>
			<Hero />
			<Carbanner />
			<Search />
			<Info />
			<Howitworks />
			<Featuredcars />
			<Reviews />
			<Aboutcarpalar />
			<Whycarpalar />
		</>
	);
}
