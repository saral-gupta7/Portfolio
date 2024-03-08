import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";
import { about } from "../constants";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const AboutMe = () => {
  const [show, setshow] = useState(false);
  return (
    // main container
    <>
      <motion.div id="about">
        {/* <motion.h2
          variants={textVariant()}
          className={`${styles.sectionHeadText} ${
            show ? "flex justify-center" : "justify-start"
          } font-bold mb-10`}
        >
          Get To Know Me
        </motion.h2> */}
      </motion.div>
      {/* <div className="max-w-[80rem] flex justify-center items-center mx-auto"> */}
      <div
        className={`relative md:px-12 md:py-16 sm:px-8 sm:py-8 px-3 py-10 w-full
        mx-auto flex  flex-wrap items-center justify-center bg-[#000919] group rounded-2xl font-grotesk `}
      >
        {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0575E6] to-[#4d4dff] rounded-2xl blur z-[-3] opacity-75 group-hover:opacity-100 transition duration-300 "></div> */}
        <div className="w-full flex flex-row justify-center p-6">
          <img
            src={profile}
            className="relative w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] rounded-full object-cover hover:scale-105 transition-all"
          />
        </div>
        <div className={`w-[60rem]`}>
          <p className="font-grotesk p-10 md:text-[20px] sm:text-[18px] text-[15px] text-white">
            <span className="text-white sm:text-[75px] text-[50px] font-poppins flex justify-start sm:justify-center mb-4">
              {" "}
              I&apos;m Saral.
            </span>{" "}
            <span className="text-white font-bold  ">
              I&apos;m a freshman at IIEST, Shibpur bacheloring in Electrical
              Engineering.
            </span>{" "}
            As an aspiring web developer, I thrive on diving into the intricate
            realms of Data Structures and Algorithms, constantly exploring
            frameworks like React.js and Next.js to craft immersive digital
            experiences. <br />
            <br /> But my curiosity doesn&apos;t stop there. I&apos;m equally
            fascinated by the boundless possibilities of machine learning and
            artificial intelligence, always eager to unravel their mysteries and
            push the boundaries of innovation. <br />
            <br />
            {show
              ? "Driven by my relentless passion and an insatiable thirst for \
            knowledge, I'm on a journey to not just keep up with the \
            ever-evolving tech landscape but to carve my own path towards \
            success. Join me as I embark on this exhilarating adventure of \
            learning, growth, and discovery."
              : ``}
            <br />
            <button
              className="sm:mt-1 mt-12 sm:flex sm:justify-center justify-start p-4 border-2 border-[#4d4dff] rounded-sm hover:bg-[#4d4dff]"
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>{" "}
      </div>

      {/* </div> */}
    </>
  );
};

// const TechSection = SectionWrapper(AboutMe, "");
// export default TechSection;
const AboutMeSection = SectionWrapper(AboutMe, "about");
export default AboutMeSection;
