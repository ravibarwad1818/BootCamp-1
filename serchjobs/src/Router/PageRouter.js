import React from "react";
import { Routes, Route } from "react-router-dom";
import EnggDetails from "../Components/EnggDetails";
import SalesDetails from "../Components/SalesDetails";
import MarketingDetails from "../Components/MarketingDetails";

const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/enggd" exact element={<EnggDetails />} />
        <Route path="/salesd" exact element={<SalesDetails />} />
        <Route path="/marketingd" exact element={<MarketingDetails />} />
        <Route path="/enggd/:id" exact element={<EnggDetails />} />
        <Route path="/salesd/:id" exact element={<SalesDetails />} />
        <Route path="/marketingd/:id" exact element={<MarketingDetails />} />
      </Routes>
    </div>
  );
};

export default PageRouter;
