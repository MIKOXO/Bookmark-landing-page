import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DownloadExtension from "../components/DownloadExtension";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DownloadExtension />
    </>
  );
};

export default Home;
