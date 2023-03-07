import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import arrow from "../assets/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
        staggerDirection: 1,
      },
    },
  };
  return (
    <section id="start">
      <div className="bg-white h-16 flex items-center md:justify-between p-default">
        <a href="/">
          <img src={logo} alt="Salo Solutions"></img>
        </a>
        <nav className="nav-menu hidden md:flex items-center">
          <AnchorLink href="#about">About us</AnchorLink>
          <AnchorLink href="#services">Our services</AnchorLink>
          <AnchorLink href="#contacts">Contacts</AnchorLink>
        </nav>
        <AnchorLink
          href="#contacts"
          className="btn-sm btn-primary hidden md:block"
        >
          Contact us
        </AnchorLink>
        {toggleMenu ? (
          <img
            className="ml-auto cursor-pointer md:hidden"
            src={menu_close}
            onClick={() => setToggleMenu(false)}
          ></img>
        ) : (
          <img
            src={menu_open}
            alt="menu"
            className="cursor-pointer ml-auto md:hidden"
            onClick={() => setToggleMenu(true)}
          ></img>
        )}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%", maxWidth: "100%" }}
              className="nav-menu absolute w-full h-[40vh] top-0 right-0 bg-white flex flex-col z-50 rounded-b-2xl"
            >
              <motion.div
                className="flex items-center justify-end h-16 px-4"
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                <img
                  className="ml-auto cursor-pointer md:hidden"
                  src={menu_close}
                  onClick={() => setToggleMenu(false)}
                ></img>
              </motion.div>
              <motion.nav
                className="flex flex-col p-4 text-th-primary text-base"
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                <div className="flex items-center justify-between p-4">
                  <AnchorLink
                    href="#about"
                    onClick={() => setToggleMenu(false)}
                  >
                    About us
                  </AnchorLink>
                  <AnchorLink
                    href="#about"
                    onClick={() => setToggleMenu(false)}
                  >
                    <img src={arrow} alt="" className="w-4"></img>
                  </AnchorLink>
                </div>
                <div className="h-[1px] w-full bg-th-pale"></div>
                <div className="flex items-center justify-between p-4">
                  <AnchorLink
                    href="#services"
                    onClick={() => setToggleMenu(false)}
                  >
                    Our services
                  </AnchorLink>
                  <AnchorLink
                    href="#services"
                    onClick={() => setToggleMenu(false)}
                  >
                    <img src={arrow} alt="" className="w-4"></img>
                  </AnchorLink>
                </div>
                <div className="h-[1px] w-full bg-th-pale"></div>
                <div className="flex items-center justify-between p-4">
                  <AnchorLink
                    href="#contacts"
                    onClick={() => setToggleMenu(false)}
                  >
                    Contacts
                  </AnchorLink>
                  <AnchorLink
                    href="#contacts"
                    onClick={() => setToggleMenu(false)}
                  >
                    <img src={arrow} alt="" className="w-4"></img>
                  </AnchorLink>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar;
