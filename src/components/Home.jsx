import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import NewProduct from "./NewProduct";
import RecommendationProduct from "./RecommendationProduct";
import ChooseCategory from "./ChooseCategory";
import BestSellingProduct from "./BestSellingProduct";
import Contact from "./Cotact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <HeroSection />
    {/* <Header bgColor={"[#103F51]"} txtColor={"white"} logoUrl={"/images/logo1.png"}  /> */}
    <NewProduct />
    <RecommendationProduct />
    <ChooseCategory />
    <BestSellingProduct />
    <Contact />
    <Footer /> 
    </>
  );
};

export default Home;
