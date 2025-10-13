import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DownloadExtension from "../components/DownloadExtension";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DownloadExtension />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
