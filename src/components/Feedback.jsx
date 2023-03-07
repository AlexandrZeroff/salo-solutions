import React from "react";
import vector1 from "../assets/feedback-vector-1.svg";
import vector2 from "../assets/feedback-vector-2.svg";
import Userform from "../snippets/Userform";

const Feedback = () => {
  return (
    <section id="feedback">
      <div className="p-default py-16 flex flex-col">
        <h3 className="text-th-primary text-center mx-auto max-w-3xl">
          We prioritize the needs and satisfaction of our clients, ensuring that
          they receive exceptional service and quality products that meet their
          unique needs
        </h3>
        <div className="md:grid md:grid-cols-5 md:gap-x-8 lg:gap-x-24">
          <div className="relative mt-16 bg-[#e2e7f2] px-[8vw] py-24 rounded-2xl col-span-3">
            <img src={vector1} alt="" className="absolute top-4 left-0"></img>
            <img
              src={vector2}
              alt=""
              className="absolute bottom-4 right-0"
            ></img>
            <div className="border-white border-2 bg-white/60 py-12 px-8 rounded-2xl h-full">
              <p>
                We'd love to hear from you! Please use this form to book a demo,
                and one of our customer support specialists will get back to you
                as soon as possible.
              </p>
              <p className="mt-4">
                To help us better assist you, please provide as much detail as
                possible about your inquiry. 
              </p>
              <p className="mt-4">
                Thank you for choosing us. We look forward to serving you and
                assisting you with any questions or concerns you may have.
              </p>
            </div>
          </div>
          <Userform />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
