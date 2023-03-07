import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Service = ({ link, header, poster, text }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <article className="max-w-sm sm:mx-4 cursor-pointer">
      <div className="flex flex-col my-12">
        <Link
          to={"/services/" + link}
          state={{ link: link }}
          onClick={scrollToTop}
        >
          <img className="" alt={header} src={poster}></img>
          <div className="w-full h-[1px] bg-white mt-2"></div>
          <h2 className="text-white mt-4">{header}</h2>
          <p className="mt-4 text-th-pale">{text}</p>
        </Link>
        <AnchorLink href="#contacts" className="btn-outline btn-sm mt-8 mr-auto">
          Read more
        </AnchorLink>
      </div>
    </article>
  );
};

export default Service;
