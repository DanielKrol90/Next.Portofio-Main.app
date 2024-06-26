import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Navbar.css";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {[
          "Strona Główna",
          "O Mnie",
          "Praca",
          "Umiejętności",
          "Kontakt"]
          .map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div/>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToogle(true)} />
        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToogle(false)} />
            <ul>
            {[
              "Strona Główna",
              "O Mnie",
              "Praca",
              "Umiejętności",
              "Kontakt",
            ].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToogle(false)}>{item}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
