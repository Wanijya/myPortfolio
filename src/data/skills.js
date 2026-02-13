import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaFigma,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiGreensock } from "react-icons/si";

export const skills = [
  {
    name: "React",
    level: "Expert",
    category: "Frontend",
    icon: FaReact,
    accent: "#61dafb",
  },
  {
    name: "JavaScript",
    level: "Expert",
    category: "Frontend",
    icon: IoLogoJavascript,
    accent: "#f7df1e",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Frontend",
    icon: SiTypescript,
    accent: "#3178c6",
  },
  {
    name: "Node.js",
    level: "Advanced",
    category: "Backend",
    icon: FaNodeJs,
    accent: "#68a063",
  },
  {
    name: "CSS / SASS",
    level: "Expert",
    category: "Frontend",
    icon: FaCss3Alt,
    accent: "#264de4",
  },
  {
    name: "Figma",
    level: "Advanced",
    category: "Design",
    icon: FaFigma,
    accent: "#a259ff",
  },
  {
    name: "GSAP",
    level: "Advanced",
    category: "Frontend",
    icon: SiGreensock,
    accent: "#88ce02",
  },
  {
    name: "Python",
    level: "Intermediate",
    category: "Backend",
    icon: FaPython,
    accent: "#3776ab",
  },
  {
    name: "Git",
    level: "Expert",
    category: "Backend",
    icon: FaGitAlt,
    accent: "#f05032",
  },
];
