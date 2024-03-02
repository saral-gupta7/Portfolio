import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { navLinks } from "../constants";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}
      >
        {/* The gradient line */}

        {/* <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#EFBD48]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
        {/* The Main text */}

        <motion.div
          className=""
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 variants={textVariant(0.1)}>
            <span
              className={`${styles.heroSubHeadText} text-[#ccd6f6] sm:text-center`}
            >
              Welcome
            </span>

            {/* <span className={`${styles.heroSubHeadText} text-[#FEE715] mt-1`}>
              Saral
            </span> */}
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} text-[#8993b1] mt-5 sm:text-center`}
            variants={fadeIn("right", "spring", 0.5, 0.75)}
          >
            I am a Web Developer. <br className="sm:block hidden" /> I build
            Apps for the Future.
          </motion.p>
        </motion.div>
      </div>
      {/*    */}
    </section>
  );
};

export default Hero;
