

const Footer = () => {
  return (
    <div className="text-sm flex justify-center text-white py-10 bg-[#111827] dark:bg-[#F9FAFB]">
      <div className="flex gap-2 items-center">
        <svg className="dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-copyright"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
        </svg>
        <p className="dark:text-[#4B5563]">2023</p>
        <p className="w-[1px] h-5 bg-white dark:bg-[#4B5563]"></p>
        <p className="dark:text-[#4B5563]">Designed and coded with ❤️️ by Sagar Shah</p>
      </div>
    </div>
  );
};

export default Footer;
