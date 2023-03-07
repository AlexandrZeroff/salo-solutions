import React from "react";
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import FullService from "./components/FullService";
import { useLocation } from "react-router-dom";

const Service = () => {
  const location = useLocation();
  const { link } = location.state;
  return (
    <div>
      <Navbar />
      <FullService link={link} />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Service;
