import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { Progress } from "@nextui-org/react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Skills = () => {
  return (
    <motion.div
      className="sm:p-0 p-5 mt-10 mb-10"
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h2
        className={`${styles.sectionHeadText} font-bold sm:text-start text-center`}
        variants={textVariant()}
      >
        My Skills
      </motion.h2>
      <motion.p
        className={`${styles.sectionSubText} mt-5`}
        variants={textVariant()}
      >
        I have experience working with the following technologies.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-between gap-10 mt-10"
        variants={fadeIn("right", "tween", `${0.5}`, 0.5)}
      >
        {/* <label className="text-white">HTML</label> */}
        <Progress
          size="md"
          label="HTML"
          value={70}
          className="max-w-md text-white"
          color="success"
          showValueLabel={true}
        />

        <Progress
          size="md"
          label="CSS"
          value={60}
          className="max-w-md text-white "
          color="success"
          showValueLabel={true}
        />

        <Progress
          size="md"
          label="Javascript"
          value={45}
          className="max-w-md text-white"
          color="success"
          showValueLabel={true}
        />

        <Progress
          size="md"
          label="React"
          value={40}
          className="max-w-md text-white"
          color="success"
          showValueLabel={true}
        />

        <Progress
          size="md"
          label="Tailwind"
          value={50}
          className="max-w-md text-white"
          color="success"
          showValueLabel={true}
        />
      </motion.div>
    </motion.div>
  );
};

const ExportedSkills = SectionWrapper(Skills, "");

export default ExportedSkills;
