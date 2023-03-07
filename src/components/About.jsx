import React from "react";
import pic from "../assets/about.jpg";
import pic_sm from "../assets/about-sm.jpg";
import pic2 from "../assets/about-vector.jpg";
import pic3 from "../assets/about-note.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="p-default py-16">
        <img
          src={pic_sm}
          className="mb-16 sm:hidden mx-auto"
          alt="About us"
        ></img>
        <img src={pic} className="mb-16 hidden sm:block" alt="About us"></img>
        <h1>About us</h1>
        <div className="flex flex-col sm:grid grid-cols-4">
          <div className="mt-16 hidden sm:mt-[10vh] sm:block mx-auto">
            <img src={pic2} className="" alt="About us"></img>
            <img src={pic3} className="mt-8" alt="About us"></img>
          </div>
          <div className="sm:col-span-3">
            <p className="mt-8 sm:mx-[10vw] lg:mx-[15vw] sm:mt-[10vh] lg:mt-[15vh] lg:text-lg">
              Our mission is to provide our customers with exceptional value,
              unparalleled service, and a vast selection of quality products
              that meet their unique needs and requirements. We work directly
              with top manufacturers and suppliers to ensure that we are able to
              offer the best prices, selection, and quality to our customers.
            </p>
            <p className="mt-8 sm:mx-[10vw] lg:mx-[15vw] sm:mb-[10vh] lg:text-lg">
              At our core, we believe in building strong relationships with our
              customers, based on mutual trust, respect, and a shared commitment
              to quality and service excellence. Our dedicated team of customer
              support specialists is always available to assist with any
              questions or concerns that our customers may have, providing
              personalized support and guidance every step of the way.
            </p>
          </div>
          <div className="mt-16 sm:hidden mx-auto">
            <img src={pic2} className="" alt="About us"></img>
            <img src={pic3} className="mt-8" alt="About us"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
