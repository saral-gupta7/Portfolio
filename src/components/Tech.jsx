import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: false, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
      >
        <div
          // options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450,
          // }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center text-[20px] font-chakra font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        id="learnings"
        className="sm:p-0 p-4"
      >
        <motion.div
          variants={textVariant()}
          className="sm:text-start text-center"
        >
          <p className={styles.sectionSubText}>Exploring Tech</p>
          <h2 className={`${styles.sectionHeadText} font-bold`}>
            Technologies I'm Learning
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] font-grotesk"
        >
          As an aspiring web and full-stack developer, I am dedicated to
          mastering cutting-edge technologies such as React.js, Three.js,
          Next.js, and more. My journey involves delving deep into the intricate
          world of web development, continuously honing my skills to stay ahead
          in this dynamic field. With a natural inclination towards learning, I
          adapt quickly to new concepts and methodologies, ensuring rapid
          progression in my proficiency.
        </motion.p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 md:justify-start justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(Tech, "tech");
export default AboutSection;
