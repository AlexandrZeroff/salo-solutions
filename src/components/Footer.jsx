import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <section id="footer" className="bg-th-primary">
      <div className="flex flex-col p-default py-8">
        <img className="mt-4 mb-12 w-48 mx-auto" src={logo} alt="Salo Solutions"></img>
        <div className="h-[1px] w-full bg-th-pale"></div>
        <div className="flex flex-wrap items-center justify-center py-8">
          <p className="m-4 text-white max-w-xs text-center">
            Legal information: Móricz Zsigmond utca 18, Budapest 1183, Hungary
          </p>
          <div className="m-4 max-w-xs">
            <p className="text-white">
              E-mail:{" "}
              <a href="mailto:office@salo-solutions.info">
                office@salo-solutions.info
              </a>
            </p>
            <p className="text-white mt-2">
              Registration number:{" "}
              <a href="tel:0109341717">
                01-09-341717
              </a>
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-th-pale"></div>
        <div className="flex flex-wrap justify-center items-center pt-8">
            <a href="#" className="text-white m-4">Privacy policy</a>
            <a href="#" className="text-white m-4">Terms and conditions</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
