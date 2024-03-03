import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // used for implementing all the animations in website.
import { styles } from "../styles"; // custom made styles for certains components.
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"; // effects for the animations.

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}
      >
        {/* The Main text */}

        <motion.div
          className=""
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 variants={textVariant(1)} className="text-center">
            <span className={`${styles.heroSubHeadText} text-[#ccd6f6] `}>
              Welcome
            </span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} text-[#8993b1] mt-5 text-center`}
            variants={fadeIn("right", "spring", 1.5, 0.75)}
          >
            I am a Web Developer. <br className="sm:block" /> I build Apps for
            the Future.
          </motion.p>
          <motion.div
            variants={textVariant(2)}
            className="relative w-full flex justify-center items-center mt-20"
          >
            <a href="#about">
              <button className="relative sm:hidden flex justify-center sm:w-[12rem] w-[10rem] text-white font-grotesk uppercase font-bold sm:text-[24px] text-[20px] bg-black p-4 rounded-full shadow-[#afe0f6] shadow-md animate-bounce">
                Explore
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      {/*    */}
    </section>
  );
};

export default Hero;
