import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Counter from "../components/Home/Counter";
import Features from "../components/Home/Features";
import Deals from "../components/Home/Deals";
import Investment from "../components/Home/Investment";
import Partners from "../components/Home/Partners";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Counter />
      <Features />
      <Deals />
      <Investment />
      <Partners />
    </>
  );
}

export default Home;
