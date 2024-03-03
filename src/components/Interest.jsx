import React from "react";
import { styles } from "../styles";
import { interest } from "../constants";
import { SectionWrapper } from "../hoc";

const Interest = () => {
  return (
    <div
      className={`${styles.padding} flex flex-wrap justify-center `}
      id="interest"
    >
      <div className="max-w-[25rem] flex-col items-center text-center mb-20">
        <h2 className={`${styles.heroSubText}text-white font-grotesk mb-4`}>
          Other Tech Stacks I'm interested In
        </h2>
        <ul>
          {interest.map((item) => (
            <li
              key={item.name}
              className={`text-white font-grotesk text-[20px]`}
            >
              <div className="flex items-center">
                <img src={item.icon} alt={item.name} width={30} height={30} />
                <h6 className="ml-4 p-5">{item.name}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:ml-auto xl:w-[38]">
        <div className="relative  left-1/2 flex w-[22rem] aspect-square border border-secondary rounded-full -translate-x-1/2 scale:75 md: scale:100">
          <div className="flex w-[15rem] aspect-square m-auto border border-slate-400 rounded-full">
            <div className="w-[6rem] aspect-square"></div>
          </div>
        </div>
        <ul>{}</ul>
      </div>
    </div>
  );
};

const NamedInterest = SectionWrapper(Interest, "");
export default NamedInterest;
