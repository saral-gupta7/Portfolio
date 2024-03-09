import { useState } from "react";
import { styles } from "../styles";
import { socials, navLinks } from "../constants";
import { logotr, ua } from "../assets";

const Footer = () => {
  const [active, setActive] = useState("");
  return (
    <div
      className={`${styles.padding} bg-gradient-to-r from-[#000000] to-[#000026] w-full flex justify-center items-center gap-10  `}
    >
      <div className="flex  flex-col justify-between w-full items-center space-y-12 mt-8">
        {/* <h2 className={styles.sectionHeadText}>
          <span className="text-gray-400">Let&#39;s </span>Connect
        </h2> */}

        <ul className="flex gap-10 ">
          {socials.map((item) => (
            <a key={item.name} href={item.url} target="_blank">
              <img
                src={item.icon}
                width={40}
                height={40}
                alt={item.title}
                className=" transition-all rounded-full hover:scale-[1.5]"
              />
            </a>
          ))}
        </ul>
        <p className="text-secondary">
          Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
        {/* <a href="#home">
          <img
            src={ua}
            alt="top"
            className="w-[3.5rem] h-[3.5rem] duration-1000 animate-bounce"
          />
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
