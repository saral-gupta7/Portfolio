import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";
import { about } from "../constants";

const AboutMe = () => {
  const [show, setshow] = useState(false);
  return (
    // main container
    <>
      <motion.div id="about">
        <motion.h2
          variants={textVariant()}
          className={`${styles.sectionHeadText} ${
            show ? "flex justify-center" : "justify-start"
          } font-bold mb-10`}
        >
          Get To Know Me
        </motion.h2>
      </motion.div>
      {/* <div className="max-w-[80rem] flex justify-center items-center mx-auto"> */}
      <div
        className={`relative sm:px-16 sm:py-16 px-3 py-10 w-full
        mx-auto flex md:flex-col flex-wrap items-center justify-between bg-primary group rounded-2xl font-grotesk `}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0575E6] to-[#4d4dff] rounded-2xl blur z-[-3] opacity-75 group-hover:opacity-100 transition duration-300 "></div>
        <div className="w-full flex flex-row justify-center p-6">
          <img
            src={profile}
            className="relative w-[12rem] h-[12rem] sm:w-[15rem] sm:h-[15rem] rounded-full object-cover hover:scale-105 transition-all"
          />

          {/* <p>
            {about.map((item) => (
              <ul
                key={item.name}
                className="flex flex-col items-start gap-10 list-none p-15 text-[24px] mb-10 font-grotesk "
              >
                <li className="mx-auto text-[24px] uppercase">
                  <span className="">Hi, I'm </span>
                  <span className="">{item.name}</span>
                </li>
                <li>
                  Designation:{" "}
                  <span className="text-[#ccd6f6] font-grotesk">
                    {" "}
                    {item.designation}
                  </span>
                </li>
                <li>
                  Qualification:{" "}
                  <span className="text-[#ccd6f6] font-grotesk">
                    {" "}
                    {item.qualification}
                  </span>
                </li>
                <li>
                  Skillset:{" "}
                  <span className="text-[#ccd6f6] font-grotesk">
                    {" "}
                    {item.Skillset}
                  </span>
                </li>
              </ul>
            ))}
          </p> */}

          {/* <button
            className="sm:flex hidden p-4 border-2 border-[#4d4dff] rounded-sm hover:bg-[#4d4dff]"
            onClick={() => {
              setshow(!show);
            }}
          >
            {show ? "Read More" : "Read Less"}
          </button> */}
        </div>
        <div className={` w-[60rem]`}>
          <p className="font-grotesk p-10 text-[18px]">
            <span className="text-white sm:text-[70px] text-[45px] font-poppins flex justify-start sm:justify-center mb-4">
              {" "}
              I&apos;m Saral.
            </span>{" "}
            <span className=" text-white font-bold  ">
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
              className="sm:mt-3 mt-12 sm:flex sm:justify-center justify-start p-4 border-2 border-[#4d4dff] rounded-sm hover:bg-[#4d4dff]"
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
