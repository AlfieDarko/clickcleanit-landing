import Link from "next/link";
import React, { Component } from "react";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import SecondHero from "../components/2nd-hero/index";
import ThirdHero from "../components/3rd-hero";
import ForthHero from "../components/4th-hero";
import Footer from "../components/footer";

// import "../static/semantic/dist/semantic.css";
const Index = () => (
  <div>
    <NavBar />
    <Hero />
    <SecondHero />
    <ThirdHero />
    <ForthHero />
    <Footer />
  </div>
);

export default Index;
