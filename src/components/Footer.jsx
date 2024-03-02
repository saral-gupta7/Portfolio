import React from "react";
import { styles } from "../styles";
import { socials } from "../constants";
import { git } from "../assets";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Footer = () => {
  return (
    <div
      className={`${styles.padding} w-full h-[40rem] flex sm:justify-center justify-center items-center gap-10  max-sm:flex-col sm:flex-col `}
      id="socials"
    >
      <motion.h1 variants={textVariant()} className="mx-auto">
        {/* <p className={styles.sectionSubText}></p> */}
        <h2 className={styles.sectionHeadText}>
          <span className="text-gray-400">Let&#39;s </span>Connect
        </h2>
      </motion.h1>
      <p className="text-secondary">
        &copy; {new Date().getFullYear()}. All Rights Reserved.
      </p>
      <ul className="flex gap-10 flex-wrap">
        {socials.map((item) => (
          <a key={item.name} href={item.url} target="_blank">
            <img
              src={item.icon}
              width={30}
              height={30}
              alt={item.title}
              className=" transition-all rounded-full hover:scale-[2.5]"
            />
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
