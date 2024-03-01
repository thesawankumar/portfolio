import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";

import { CiSaveDown1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Development", "Full Stack Development", "Problem Solving"],
    loop: 0,
  });

  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-center lg:mx-24 lg:my-10 lg:mt-28">
      <div className="flex flex-col gap-6 items-center lg:items-start justify-center">
        <h1 className="text-3xl lg:text-6xl font-bold text-gray-500">
          Hi There,
        </h1>
        <h1 className="text-3xl lg:text-6xl font-bold text-gray-500">
          I am Sawan <span className="text-primary">Kumar</span>
        </h1>
        <p className="text-xl lg:text-3xl font-semibold text-gray-500">
          I Am Into <span className="text-red-500">{text}</span>
          <Cursor cursorColor="red" />
        </p>
        <Link to="/assets/Sawan kumar resume.pdf" target="_blank">
          <button className="flex gap-2 items-center text-lg lg:text-xl font-bold px-3 lg:px-6 py-1 lg:py-2 bg-primary rounded-3xl  shadow-xl shadow-zinc-500 hover:bg-secondary hover:text-cyan-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <p className="cursor-pointer">Resume</p>
            <CiSaveDown1 />
          </button>
        </Link>
        <div className="flex gap-5 justify-center items-center">
          <ul className="flex gap-4">
            <Link
              to="https://www.linkedin.com/in/thesawankumar/"
              target="_blank"
            >
              <li className="border-2 px-3 py-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-cyan-400">
                <FaLinkedinIn />
              </li>
            </Link>
            <Link to="https://github.com/thesawankumar" target="_blank">
              <li className="border-2 px-3 py-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-cyan-400">
                <FaGithub />
              </li>
            </Link>
            <Link to="https://twitter.com/thesawan_kumar" target="_blank">
              <li className="border-2 px-3 py-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-cyan-400">
                <FaTwitter />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="my-8 lg:my-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img src="/assets/profile.png" className="h-40 lg:h-80 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
