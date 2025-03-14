import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Counter from "../components/Home/Counter";
import Features from "../components/Home/Features";
import Deals from "../components/Home/Deals";
import Investment from "../components/Home/Investment";
import Partners from "../components/Home/Partners";
// import Roadmap from "../components/Home/Roadmap";
import Faq from "../components/Home/Faq";
import About from "../components/Home/About";
import Footer from "../components/Footer";
import Feature2 from "../components/Home/Feature2";

function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <Features />
      <Feature2 />
      <Deals />
      <Investment />
      <Partners />
      {/* <Roadmap /> */}
      <Faq />
      <About />
    </>
  );
}

export default Home;
