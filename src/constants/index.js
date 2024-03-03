import {
  reactjs,
  coding,
  backend,
  ai,
  git,
  instagram,
  linkedin,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "learnings",
    title: "Learnings",
  },
  {
    id: "interest",
    title: "Interests",
  },
  {
    id: "socials",
    title: "Connect",
  },
];

const services = [
  {
    title: "Web Development",
    icon: coding,
  },
  {
    title: "React Development",
    icon: reactjs,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Data Structures and Algorithms",
    icon: ai,
  },
];

const socials = [
  {
    name: "GitHub",
    icon: git,
    url: "https://github.com/saral-gupta7",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/saralgupta7/",
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/srl.gpt7/",
  },
];

const interest = [
  {
    name: "Flutter Development",
    icon: next,
  },
  {
    name: "Machine Learning And AI",
    icon: next,
  },
  {
    name: "Web3 and Blockchain",
    icon: next,
  },
];

export { services, socials, interest };
