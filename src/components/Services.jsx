import React from "react";
import { ServiceList } from "../servicesList";
import Service from "../snippets/Service";

const Services = () => {
  return (
    <section id="services" className="bg-th-primary rounded-2xl">
      <div className="p-default pt-16 md:pt-20">
        <h1 className="text-white md:text-center lg:mb-8">Our services</h1>
        <div className="flex flex-wrap items-center justify-center">
          {ServiceList.map((service, index) => (
            <Service
              key={index}
              link={service.link}
              header={service.header}
              poster={service.poster}
              text={service.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
