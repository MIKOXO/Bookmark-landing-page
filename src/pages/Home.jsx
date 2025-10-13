import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DownloadExtension from "../components/DownloadExtension";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DownloadExtension />
      <FAQ />
    </>
  );
};

export default Home;
