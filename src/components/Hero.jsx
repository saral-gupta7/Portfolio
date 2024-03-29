import { useState, useEffect } from "react"; // importing react and useState.
import { motion } from "framer-motion"; // used for implementing all the animations in website.
import { styles } from "../styles"; // custom made styles for certains components.
import { fadeIn, staggerContainer, textVariant } from "../utils/motion"; // effects for the animations.
import { git, ar } from "../assets";

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
        className={`${styles.paddingX} absolute inset-0 w-full mx-auto flex items-center justify-center gap-5  drop-shadow-lg`}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3f35d1]  to-[#000000] rounded-2xl blur z-[-1] opacity-75 group-hover:opacity-100 transition duration-300 "></div>

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
            className="relative w-full flex sm:flex-row sm:justify-center justify-center  gap-4 mt-20 "
          >
            <a href="#about">
              <button className="flex justify-evenly items-center sm:w-[12rem] w-[9rem] shadow-card hover:bg-white hover:text-black  hover:border-[#4d4dff] transition-all text-white font-grotesk font-bold sm:text-[24px] text-[18px] bg-[#4d4dff] px-4 py-3 rounded-md group">
                <img
                  src={ar}
                  alt="github"
                  className="sm:w-9 sm:h-9 h-8 w-8 bg-white p-1 rounded-full "
                />
                Explore
              </button>
            </a>
            <a href="https://github.com/saral-gupta7" target="_blank">
              <button
                className="flex items-center justify-evenly sm:w-[12rem] w-[9rem] text-[#000] font-grotesk font-bold sm:text-[24px] text-[18px]
               bg-white px-4 py-3 rounded-md hover:scale-[1.01] shadow-card transition transform hover:bg-black hover:text-white"
              >
                <img
                  src={git}
                  alt="github"
                  className="sm:w-9  sm:h-9 h-8 w-8 bg-black rounded-full "
                />
                Github
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
