import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header"
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import PortfolioItemPage from '../components/PortfolioItemPage'
import PortfolioPage from "../components/PortfolioPage";
    const AppRouter = () => (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="portfolio" element={<PortfolioPage />}>
              <Route path=":id" element={<PortfolioItemPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </Router>
    );

export default AppRouter;

