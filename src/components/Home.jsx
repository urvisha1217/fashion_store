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
    <Header bgColor={"white"} txtColor={"[#103F51]"} />
    <HeroSection />
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
