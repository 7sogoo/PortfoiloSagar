import photoBlack from "../assests/PicBlack.png";
import photoWhite from "../assests/PicWhite.png";
import sukuna3 from "../assests/sukuna3.webp"

const locWhiteSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-map-pin"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const locBlackSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-map-pin"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const githubSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const twitterSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-twitter"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const figmaSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-figma"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

const Main = () => {
  return (
    <div className="flex flex-row justify-center bg-[#030712] dark:bg-white">
      <div className="flex gap-12 py-10 max-w-[1280px] px-4 sm:flex-row flex-col-reverse">
        <div className="flex flex-col justify-center">
          <p className="text-[#F9FAFB] dark:text-[#111827] text-6xl font-bold">
            Hi, I’m Sukuna
          </p>
          <p className="py-2 text-[#D1D5DB] dark:text-[#4B5563]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="pt-[48px] flex items-center gap-2">
            <div className="hidden dark:flex">{locBlackSvg}</div>
            <div className="flex dark:hidden">{locWhiteSvg}</div>
            <p className="text-[#D1D5DB] dark:text-[#4B5563]">
              Tokyo, Japan
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2 ml-[8px]">
            <p className="size-2 border-0 rounded-full bg-[#10B981]"></p>
            <p className="text-[#D1D5DB] dark:text-[#4B5563]">
              Available for new projects
            </p>
          </div>
          <div>
            <div className="py-12 flex gap-3 text-white dark:text-black">
              {githubSvg}
              {twitterSvg}
              {figmaSvg}
            </div>
          </div>
        </div>
        <div className="min-w-[400px] flex sm:justify-end  justify-center items-center">
        <div className="relative">
          <div className="flex dark:hidden absolute top-[28px] sm:left-[28px] left-[-10px] dark:bg-[#E5E7EB] z-10 bg-gradient-to-r from-red-500 to-orange-500 sm:w-[280px] w-[316px] h-[320px]"></div>
          <div className="hidden dark:flex absolute top-[28px] sm:left-[28px] left-[-10px] bg-[#E5E7EB] z-10 sm:w-[280px] w-[320px] h-[300px]"></div>
          <img className="relative z-20 border-8 border-[#030712] box-content dark:border-white w-[280px] h-[320px] object-cover" src={sukuna3} alt="Your Photo" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
