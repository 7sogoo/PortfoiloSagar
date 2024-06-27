import photo from "../assests/Pictures.png";
import { TextEditor } from "./TextEditor";

const copyBlackSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
const copyWhiteSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
const arr = [
  "React",
  "Next.js",
  "Typescript",
  "Nest.js",
  "PostgreSQL",
  "Tailwindcss",
  "Figma",
  "Cypress",
  "Storybook",
  "Git",
];

const cardCreator = (a) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <p className="text-[#F9FAFB] font-semibold text-xl dark:text-[#111827]">Fiskil</p>
        <p className="text-[#D1D5DB] font-normal dark:text-[#4B5563]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
      </div>
      <div className="flex max-w-[576px] gap-2 flex-wrap">
        {a.map((el,i) => (
          <TextEditor text={el} key={i}/>
        ))}
      </div>
      <div className="hidden dark:flex">{copyBlackSvg}</div>
      <div className="flex dark:hidden">{copyWhiteSvg}</div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="flex flex-col items-center py-20 gap-12 dark:bg-white">
      <div className="flex flex-col items-center gap-4">
        <TextEditor text="Work"/>
        <p className="text-white dark:text-[#4B5563]">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="flex max-w-[1280px] sm:flex-row flex-col px-4">
        <div className="min-w-[50%] bg-[#374151] dark:bg-[#F3F4F6] sm:rounded-l-xl rounded-t-xl">
          <img className="sm:p-12 p-6" src={photo}></img>
        </div>
        <div className="bg-[#111827] p-10 text-white items-center sm:rounded-r-xl rounded-b-xl sm:max-w-[50%] dark:bg-[#F9FAFB]">
          {cardCreator(arr)}
        </div>
      </div>
      <div className="flex max-w-[1280px] sm:flex-row flex-col px-4">
        <div className="bg-[#111827] p-10 text-white items-center sm:rounded-l-xl rounded-t-xl sm:max-w-[50%] dark:bg-[#F9FAFB]">
          {cardCreator(arr)}
        </div>
        <div className="min-w-[50%] bg-[#374151] sm:rounded-r-xl rounded-b-xl dark:bg-[#F3F4F6]">
          <img className="sm:p-12 p-6" src={photo}></img>
        </div>
      </div>
      <div className="flex max-w-[1280px] sm:flex-row flex-col px-4">
        <div className="min-w-[50%] bg-[#374151] sm:rounded-l-xl rounded-t-xl dark:bg-[#F3F4F6]">
          <img className="sm:p-12 p-6" src={photo}></img>
        </div>
        <div className="bg-[#111827] p-10 text-white items-center sm:rounded-r-xl rounded-b-xl sm:max-w-[50%] dark:bg-[#F9FAFB]">
          {cardCreator(arr)}
        </div>
      </div>
    </div>
  );
};

export default Work;
