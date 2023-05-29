import React from "react";
import PersonCardAd from "../components/PersonCardAd/PersonCardAd";
import ProductAd from "../components/ProductAd/ProductAd";
import ProductCategories from "../components/ProductCategories/ProductCategories";

const CategoryPage = () => {
  return (
    <div>
      <ProductAd isNew={true} />
      <ProductCategories />
      <PersonCardAd />
    </div>
  );
};

export default CategoryPage;
