import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banners/Banner";
import Footer from "./components/Footer/Footer";
import Banner2 from "./components/Banners/Banner2";
import Banner3 from "./components/Banners/Banner3";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <NavBar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
};

export default App;
