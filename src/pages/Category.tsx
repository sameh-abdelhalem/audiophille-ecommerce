import React from "react";
import PersonCardAd from "../components/PersonCardAd/PersonCardAd";
import ProductAd from "../components/ProductAd/ProductAd";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import { log } from "console";

const CategoryPage = () => {
  return (
    <div>
      <ProductAd />
      <ProductCategories />
      <PersonCardAd />
    </div>
  );
};

export default CategoryPage;
