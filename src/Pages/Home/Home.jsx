import React from "react";
import ProductsPage from "../Products/ProductsPage";
import Banner from "../../Compponets/Banner";
import ServiceCategory from "../../Compponets/ServiceCategory";

function Home() {
  return (
    <>
      <div className="container">
        <Banner />
        <ServiceCategory />
        {/* <ProductsPage></ProductsPage> */}
      </div>
    </>
  );
}

export default Home;
