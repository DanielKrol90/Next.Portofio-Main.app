import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Witaj, nazywam się</p>
              <h1 className="">Daniel</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text"></p>
            <p className="p-text"></p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: [1], delayChildren: [1] }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: [1], ease: "easeInOut" }}
        className="app__header-img"
        srcSet={images.circle}
        alt="overlay_circle"
      />
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app_header-circles"
      >
      {[images.flutter, images.redux, images.sass].map((circle, index) =>
      <div className="circle-cmp app__flex" key={`circle-${index}`}>
        <img src={circle} alt="circle"/>
      </div>
      )}
      </motion.div>
    </div>
  );
};

export default Header;
