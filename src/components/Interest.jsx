import { styles } from "../styles";
import { interest } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Interest = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.padding} flex flex-wrap sm:justify-between justify-center`}
      id="interest"
    >
      <div className="max-w-[50rem] flex-col items-center sm:text-start text-center mb-20 p-2">
        <motion.h2
          className={`${styles.sectionHeadText} mb-4`}
          variants={textVariant()}
        >
          Other Tech Stacks I'm interested In
        </motion.h2>
        <ul>
          {interest.map((item, index) => (
            <motion.li
              key={item.name}
              className={`text-[#dfd9ff] font-grotesk text-[20px]`}
              variants={fadeIn("right", "spring", `${0.5 * index}`, 0.75)}
            >
              <div className="flex items-center">
                <img src={item.icon} alt={item.name} width={30} height={30} />
                <h6 className="ml-4 p-5">{item.name}</h6>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      {/* <div className="lg:ml-auto xl:w-[38]">
        <div className="relative  left-1/2 flex w-[22rem] aspect-square border border-secondary rounded-full -translate-x-1/2 scale:75 md: scale:100">
          <div className="flex w-[15rem] aspect-square m-auto border border-slate-400 rounded-full">
            <div className="w-[6rem] aspect-square"></div>
          </div>
        </div>
        <ul>{}</ul>
      </div> */}
    </motion.div>
  );
};

const NamedInterest = SectionWrapper(Interest, "");
export default NamedInterest;
