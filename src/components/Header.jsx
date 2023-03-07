import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <section id="header" className="bg-header-sm bg-cover">
      <div className="p-default flex flex-col items-center">
        <h1 className="text-center mt-16 md:mt-24 lg:mt-32 mx-auto max-w-3xl">
          Excellence in Every Detail: Our Commitment to High-Quality Services
        </h1>
        <p className="mt-8 text-center mx-auto max-w-3xl">
          We are a global provider of high-quality products at competitive
          prices, serving customers in a wide range of industries and sectors
          around the world
        </p>
        <AnchorLink href="#contacts" className="btn-sm btn-primary mt-12 md:hidden">
          Contact us
        </AnchorLink>
        <article className="flex flex-col items-center md:flex-row p-10 my-12 md:my-16 lg:my-24 md:w-full rounded-2xl bg-white max-w-4xl md:justify-around shadow-default">
          <div>
            <h1 className="text-center">2021</h1>
            <p className="mt-2">Company founded</p>
          </div>
          <div className="mt-8 md:mt-0">
            <h1 className="text-center">215+</h1>
            <p className="mt-2">Consulted people</p>
          </div>
          <div className="mt-8 md:mt-0">
            <h1 className="text-center">200+</h1>
            <p className="mt-2">Countries use our services</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Header;
