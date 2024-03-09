import { styles } from "../styles";
import { socials } from "../constants";

const Footer = () => {
  return (
    <div
      className={`${styles.padding} bg-gradient-to-r from-[#000000] to-[#000026] w-full flex justify-center items-center gap-10  `}
    >
      <div className="flex  flex-col justify-between w-full items-center space-y-12 mt-8">
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
      </div>
    </div>
  );
};

export default Footer;
