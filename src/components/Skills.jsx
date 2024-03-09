import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { Progress } from "@nextui-org/react";

const Skills = () => {
  return (
    <div className="sm:p-0 p-5 mt-10 mb-10" id="skills">
      <h2
        className={`${styles.sectionHeadText} font-bold sm:text-start text-center`}
      >
        My Skills
      </h2>
      <p className={`${styles.sectionSubText} mt-5`}>
        I have experience working with the following technologies.
      </p>

      <div className="flex flex-wrap justify-between gap-10 mt-10">
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
      </div>
    </div>
  );
};

const ExportedSkills = SectionWrapper(Skills, "");

export default ExportedSkills;
