import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";
import { CiSaveDown1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Web Development", "Full Stack Development", "Problem Solving"],
    loop: 0,
  });

  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center lg:mx-20 lg:mt-20 gap-12">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 items-center lg:items-start justify-center text-center lg:text-left"
      >
        <h1 className="text-2xl lg:text-5xl font-bold text-gray-700">
          Hi There, 👋
        </h1>
        <h1 className="text-2xl lg:text-5xl font-bold text-gray-800">
          I am <span className="text-primary">Sawan Kumar</span>
        </h1>
        <p className="text-lg lg:text-2xl font-medium text-gray-600">
          I am into{" "}
          <span className="text-red-500 font-semibold">{text}</span>
          <Cursor cursorColor="red" />
        </p>

        {/* Resume Button */}
        <Link to="/assets/Sawan-Kumar-Resume.pdf" target="_blank">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex gap-2 items-center text-base text-grey-300 lg:text-lg font-semibold px-5 py-2.5 bg-primary rounded-full shadow-md hover:bg-secondary hover:text-cyan-400 transition duration-300"
          >
            <p>Resume</p>
            <CiSaveDown1 size={20} />
          </motion.button>
        </Link>

        {/* Social Links */}
        <div className="flex gap-4 mt-5">
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-4"
          >
            <Link
              to="https://www.linkedin.com/in/thesawankumar/"
              target="_blank"
            >
              <li className="border p-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-cyan-400 transition duration-300">
                <FaLinkedinIn size={18} />
              </li>
            </Link>
            <Link to="https://github.com/thesawankumar" target="_blank">
              <li className="border p-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-cyan-400 transition duration-300">
                <FaGithub size={18} />
              </li>
            </Link>
            <Link to="https://twitter.com/thesawan_kumar" target="_blank">
              <li className="border p-3 rounded-full bg-secondary text-primary hover:bg-primary hover:text-cyan-400 transition duration-300">
                <FaTwitter size={18} />
              </li>
            </Link>
          </motion.ul>
        </div>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center"
      >
        {/* Glow Background */}
        <div className="absolute w-36 h-36 lg:w-52 lg:h-52 rounded-full bg-primary -z-10 blur-3xl opacity-60 animate-pulse"></div>
        <img
          src="/assets/profile.png"
          className="h-36 lg:h-72 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
