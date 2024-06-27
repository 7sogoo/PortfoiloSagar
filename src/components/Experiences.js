import logo from "../assests/logo-upworklogo.png";

const array = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Ut pretium arcu et massa semper, id fringilla leo semper.",
  "Sed quis justo ac magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];
const array2 = [
  "Sed quis justo ac magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed quis justo ac magna.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

const array3 = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

const experiences = [
  { header: "Sr. Frontend Developer", date: "Nov 2021 - Present", data: array },
  { header: "Team Lead", date: "Jul 2017 - Oct 2021", data: array2 },
  { header: "Full Stack Developer", date: "Dec 2015 - May 2017", data: array3 },
];

const createList = (header, date, data) => (
  <div className="flex items-start space-x-4 rounded-xl  bg-[#1F2937] px-8 py-8 gap-12 sm:flex-row flex-col dark:bg-white">
    <img className="w-[102px] h-7" src={logo} alt="Company Logo" />
    <div className="max-w-[384px]">
      <p className="text-[#F9FAFB] font-semibold text-xl dark:text-[#111827]">{header}</p>
      <ul className="list-disc px-4">
        {data.map((el, index) => (
          <li className="text-[#D1D5DB] font-normal dark:text-[#4B5563]" key={index}>{el}</li>
        ))}
      </ul>
    </div>
    <p className="font-normal dark:text-[#4B5563]">{date}</p>
  </div>
);

const Experiences = () => {
  return (
    <div className="text-white flex flex-col items-center sm:p-20 px-4 py-20 bg-[#111827] dark:bg-[#F9FAFB]">
      <div className="flex flex-col items-center gap-4">
        <p className="font-semibold px-5 py-1 bg-[#374151] rounded-xl dark:text-[#4B5563] dark:bg-[#E5E7EB]">Experience</p>
        <p className="text-[#D1D5DB] text-xl pb-5 dark:text-[#4B5563]">Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="max-w-[1280px] flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={index}>{createList(exp.header, exp.date, exp.data)}</div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

