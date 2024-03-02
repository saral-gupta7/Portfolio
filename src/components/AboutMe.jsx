import React from "react";
import { motion, stagger } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";

const AboutMe = () => {
  return (
    <motion.div
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.padding} mx-auto relative z-0`}
      id="about"
    >
      {/* This is heading motion h1 */}

      {/* This is the div container of the about me section including photo and text */}
      <div className="relative flex flex-wrap  gap-7 bg-primary  p-[4rem] rounded-2xl w-full mt-10 group">
        <motion.h1 variants={textVariant()} className="mx-auto">
          {/* <p className={styles.sectionSubText}></p> */}
          <h2 className={styles.sectionHeadText}>About Me</h2>
        </motion.h1>
        {/* This the bg for the blur effect */}

        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0575E6] to-[#65C7F7] rounded-2xl blur z-[-3] opacity-75 group-hover:opacity-100 transition duration-300 "></div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.75)}
          className="w-full relative mt-8"
        >
          {/* Profile Image */}
          <img
            src={profile}
            className="relative xs:w-[14rem] xs:h-[14rem] mb-5 mx-auto rounded-full object-cover border-4  border-gray-800  hover:scale-110 transition-all"
          />
        </motion.div>
        <motion.p
          variants={fadeIn("up", "tween", 0.3, 0.75)}
          className="relative mt-[8px] sm:text-[18px] text-[16px] lg:text-center text-secondary"
        >
          <div className="">
            Hey there, I'm{" "}
            <span className="text-white font-bold ">Saral Gupta,</span> a
            first-year student at{" "}
            <span className="text-white font-bold ">IIEST, Shibpur,</span> with
            a burning passion for all things tech. As an aspiring web developer,
            I thrive on diving into the intricate realms of Data Structures and
            Algorithms, constantly exploring frameworks like React.js and
            Next.js to craft immersive digital experiences. <br />
            <br /> But my curiosity doesn't stop there. I'm equally fascinated
            by the boundless possibilities of machine learning and artificial
            intelligence, always eager to unravel their mysteries and push the
            boundaries of innovation. <br />
            <br />
            Driven by my relentless passion and an insatiable thirst for
            knowledge, I'm on a journey to not just keep up with the
            ever-evolving tech landscape but to carve my own path towards
            success. Join me as I embark on this exhilarating adventure of
            learning, growth, and discovery.
          </div>
        </motion.p>
      </div>
    </motion.div>
  );
};

const TechSection = SectionWrapper(AboutMe, "");
export default TechSection;
