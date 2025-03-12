import React, { useState } from "react";
import CategoriesSection from "../../components/categories";
import Hero from "../../components/Header/hero/hero";
import CategorizedProducts from "../../components/products/categorized-products";
import SubscriptionForm from "../../components/subscriptionform";

const HomePage = () => {
  // I use shared state
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <>
      <Hero />
      <CategoriesSection activeCategory={activeCategory} />
      <CategorizedProducts setActiveCategory={setActiveCategory} />
      <SubscriptionForm />
    </>
  );
};

export default HomePage;
