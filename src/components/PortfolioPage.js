import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";


const PortfolioPage = () => (
  <div>
    <h1>Our work</h1>
    <p>Checkout my site @ test@gmail.com</p>

    <Link to="1"> Item One </Link>
    <Link to="2"> Item Two </Link>
    <Link to="3"> Item Three </Link>

    <Outlet />


  </div>
);

export default PortfolioPage;
