import React from "react";
import ProductsPage from "../Products/ProductsPage";
import Banner from "../../Compponets/Banner";
import ServiceCategory from "../../Compponets/ServiceCategory";
import VisaFreeCountry from "../../Compponets/VisaFreeCountry";
import VisaInfoTabs from "../../Compponets/VisaInfoTabs";

function Home() {
  return (
    <>
      <div className="container">
        <Banner />
        <ServiceCategory />
        <VisaFreeCountry />
        <VisaInfoTabs />
        {/* <ProductsPage></ProductsPage> */}
      </div>
    </>
  );
}

export default Home;
