import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Counter from "../components/Home/Counter";
import Features from "../components/Home/Features";
import Deals from "../components/Home/Deals";
import Investment from "../components/Home/Investment";
import Partners from "../components/Home/Partners";
// import Roadmap from "../components/Home/Roadmap";
import Faq from "../components/Home/Faq";
import About from "../components/Home/About";
import Footer from "../components/Home/Footer";

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
      {/* <Roadmap /> */}
      <Faq />
      <About />
      <Footer />
    </>
  );
}

export default Home;
