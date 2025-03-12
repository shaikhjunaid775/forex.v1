import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Counter from "../components/Home/Counter";
import Features from "../components/Home/Features";
import Deals from "../components/Home/Deals";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Counter />
      <Features />
      <Deals />
    </>
  );
}

export default Home;
