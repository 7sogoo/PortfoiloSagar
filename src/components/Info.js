import photoBlack from "../assests/Black.png";
import photoWhite from "../assests/White.png"
import sukuna2 from "../assests/sukuna2.jpg"
import { TextEditor } from "./TextEditor";

const Info = () => {
  return (
    <div className="px-4 flex py-10 bg-[#111827] dark:bg-[#F9FAFB] text-white flex-col items-center gap-10">
      <TextEditor text="About me"/>
      <div className="flex max-w-[1280px] gap-4 items-center sm:flex-row flex-col">
        <div className="sm:min-w-[50%] max-h-[694px]">
        <div className="relative mb-10 ml-4">
          <div className="flex dark:hidden absolute top-[28px] sm:left-[-18px] left-[-12px] z-10 bg-gradient-to-r from-red-500 to-pink-500  dark:bg-[#E5E7EB] sm:w-[400px] w-[320px] sm:h-[480px] h-[360px]"></div>
          <div className="hidden dark:flex absolute top-[28px] sm:left-[-18px] left-[-12px] z-10 bg-[#E5E7EB] sm:w-[400px] w-[300px] sm:h-[480px] h-[330px]"></div>
          <img className="relative z-20 box-content border-8 border-[#111827] dark:border-[#F9FAFB] sm:w-[400px] w-[280px] sm:h-[480px] h-[360px] object-cover" src={sukuna2} alt="Your Photo" />
        </div>
        </div>
        <div className="flex flex-col gap-4 text-[#D1D5DB] dark:text-[#111827]">
          <p>Curious about me? Here you have it:</p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div className="flex justify-between ml-4">
            <div>
              <ul className="list-disc">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
