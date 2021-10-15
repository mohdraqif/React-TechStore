import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
// import productsBcg from "../images/productsBcg.jpeg";
import booksshelves from "../images/alfons-morales-YLSwjSy7stw-unsplash.jpg";
export default function ProductsPage() {
  return (
    <>
      <Hero img={booksshelves} />
      <Products />
    </>
  );
}
