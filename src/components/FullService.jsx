import React from "react";
import { ServiceList } from "../servicesList";
import { Link } from "react-router-dom";
import Service from "../snippets/Service";

const FullService = ({ link }) => {
  const currentService = ServiceList.find((service) => service.link === link);
  return (
    <>
      <section id="service" className="bg-th-primary">
        <div className="p-default flex flex-col pb-16">
          <img
            className="mx-auto w-full mt-12 md:my-16 max-w-3xl"
            alt={currentService.header}
            src={currentService.poster}
          ></img>
          <div className="md:flex items-start justify-center mt-8">
            <Link to="/" className="text-th-pale">
              Main page /
            </Link>
            <h2 className="text-center mt-4 md:mt-0 md:ml-4 text-white">
              {currentService.header}
            </h2>
          </div>
          <div className="flex flex-col mt-8 px-4 xxs:px-8 xs:px-12 sm:px-20 md:px-32 max-w-4xl mx-auto">
            {currentService.texts.map((paragraph, i) => (
              <>
                <p className="mt-4 text-th-pale" key={i}>
                  {paragraph}
                </p>
              </>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="bg-th-primary rounded-b-2xl">
        <div className="p-default">
          <div className="flex flex-wrap items-center justify-center">
            {ServiceList.filter(
              (service) => service.link !== currentService.link
            ).map((service, index) => (
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
    </>
  );
};

export default FullService;
