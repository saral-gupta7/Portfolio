import React from "react";
import { styles } from "../styles";
import { interest } from "../constants";
import { SectionWrapper } from "../hoc";

const Interest = () => {
  return (
    <div className={`${styles.padding} flex`} id="interest">
      <div className="max-w-[25rem]">
        <h2 className={`${styles.heroSubText}text-white  font-grotesk mb-4`}>
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
    </div>
  );
};

export default SectionWrapper(Interest, "");
