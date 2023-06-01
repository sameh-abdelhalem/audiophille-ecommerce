import React from "react";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import PersonCardAd from "../components/PersonCardAd/PersonCardAd";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <div>
      <ProductCategories />
      <PersonCardAd />
    </div>
  );
};

export default ProductDetailsPage;
