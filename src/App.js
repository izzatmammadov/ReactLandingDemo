import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { Service } from "./pages/ServicePage";
import { Contact } from "./pages/ContactPage";
import { Error } from "./pages/ErrorPage"
import "./index.css"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
