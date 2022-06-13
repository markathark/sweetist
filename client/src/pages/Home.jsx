import React from "react";
import Bestseller from "../components/Bestseller";
import Categories from "../components/Categories";
import Intro from "../components/Intro";
import Newsletter from "../components/Newsletter";
import Story from "../components/Story";

const Home = () => {
  return (
    <>
      <Intro />
      <Categories />
      <Bestseller />
      <Story />
      <Newsletter />
    </>
  );
};

export default Home;
