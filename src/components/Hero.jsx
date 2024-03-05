import React, { useState, useEffect } from "react"; // importing react and useState.

import { motion } from "framer-motion"; // used for implementing all the animations in website.
import { styles } from "../styles"; // custom made styles for certains components.
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"; // effects for the animations.

const Hero = () => {
  const [offSetY, setoffSetY] = useState(0);
  const handleScroll = () => setoffSetY(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="relative w-full h-screen mx-auto"
      id="home"
      style={{ transform: `translateY(${offSetY * 0.3}px)` }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex items-center justify-center gap-5  drop-shadow-lg`}
      >
        {/* The Main text */}

        <motion.div
          className=""
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h1 variants={textVariant()} className="text-center">
            <span className={`${styles.heroSubHeadText} text-[#ccd6f6]`}>
              Welcome
            </span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} text-[#8993b1] mt-5 text-center`}
            variants={fadeIn("right", "spring", 0.5, 0.75)}
          >
            I am a Web Developer. <br className="sm:block" /> I build Apps for
            the Future.
          </motion.p>
          <motion.div
            variants={textVariant(1)}
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
