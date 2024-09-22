import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaPython} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export const TechStackData = [
  {
    Advance: [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Meterial UI",
        icon: <SiMui className="md:text-4xl text-2xl" color="#29b6f6" />,
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui className="md:text-4xl text-2xsl" color="#50cbc0" />
      },
      {
        name: "Vercel",
        icon: <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
    ],
    Good: [
      {
        name: "NextJS",
        icon: <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      },
      
      {
        name: "firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffcd33" />
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />
      },
      {
        name: "netlify",
        icon: <SiNetlify className="md:text-4xl text-2xl" color={"#31b5ba"} />
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />
      },

    ],
    Familiar: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />
      },
      {
        name: "Python",
        icon: <FaPython className="md:text-4xl text-2xl" color="#547c99" />
      },
      {
        name: "SASS",
        icon: <DiSass className="md:text-4xl text-2xl" color="#f06292" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      
    ]

  }
]