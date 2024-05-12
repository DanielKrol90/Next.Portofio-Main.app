import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.css";

const abouts = [
  {
    title: "Rozwój strony internetowej",
    description:
      "Rozwój i wprowadzenie poprawek dla istniejącej strony internetowej",
    imgUrl: images.about01,
  },
  {
    title: "Nowa strona internetowa",
    description:
      "Zgodnie z pomysłem i oczekiwaniem klienta, tworzę od zera nową stronę internetową",
    imgUrl: images.about02,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Dobrze stworzona <span>Strona internetowa</span> <br/>
        oznacza {" "}<span>lepszą sprzedaż oraz więcej klientów</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bolt-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
