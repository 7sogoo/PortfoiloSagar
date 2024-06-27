import { TextEditor } from "./TextEditor";

const JS = 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64"
    height="64"
    viewBox="0 0 48 48"
  >
    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
    <path
      fill="#000001"
      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
    ></path>
  </svg>
;

const TS = 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64"
    height="64"
    viewBox="0 0 48 48"
  >
    <linearGradient
      id="O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1"
      x1="15.189"
      x2="32.276"
      y1="-.208"
      y2="46.737"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-color="#2aa4f4"></stop>
      <stop offset="1" stop-color="#007ad9"></stop>
    </linearGradient>
    <rect
      width="36"
      height="36"
      x="6"
      y="6"
      fill="url(#O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1)"
    ></rect>
    <polygon
      fill="#fff"
      points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
    ></polygon>
    <path
      fill="#fff"
      d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986	c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92	c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
    ></path>
  </svg>
;


const arr = [
  {
    icon: JS,
    name: "Javascript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: JS,
    name: "Javascript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: JS,
    name: "Javascript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: JS,
    name: "Javascript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: JS,
    name: "Javascript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: JS,
    name: "Javascript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: JS,
    name: "Javascript",
  },
  {
    icon: TS,
    name: "Typescript",
  },
  {
    icon: JS,
    name: "Javascript",
  },
]

const Skills = () => {
  return (
    <div className="flex justify-center text-white flex-col items-center sm:py-24 p-[16px] dark:bg-white">
      <div className="text-[#D1D5DB] dark:text-[#4B5563] flex flex-col items-center">
        <TextEditor text="Skills"/>
        <p className="py-4 dark:text-[#4B5563]">The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="flex max-w-[1216px] sm:gap-[86px] gap-[74px] flex-wrap justify-center">
        {arr.map((el,index) => (
          <div key={index} className="flex flex-col items-center dark:text-[#4B5563]">
            {el.icon}
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
