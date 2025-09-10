import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="flex flex-col gap-6 bg-gray-50 py-10">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row justify-evenly items-center gap-8 py-8 px-6 bg-white rounded-2xl shadow-lg"
      >
        {/* Left: Contact & Socials */}
        <div className="flex flex-col gap-4 justify-center items-start">
          <h1 className="text-3xl font-semibold text-gray-800">Get In Touch 📞</h1>
          <p className="text-base text-gray-600 break-normal">
            Thank you for visiting my personal portfolio website.
          </p>
          <p className="text-base text-gray-600 break-normal">
            Connect with me over socials.
          </p>

          <motion.ul
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 mt-3"
          >
            <Link
              to="https://www.linkedin.com/in/thesawankumar/"
              target="_blank"
            >
              <motion.li
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 px-3 py-3 rounded-full bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white cursor-pointer transition"
              >
                <FaLinkedinIn />
              </motion.li>
            </Link>
            <Link to="https://github.com/thesawankumar" target="_blank">
              <motion.li
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 px-3 py-3 rounded-full bg-gray-100 text-gray-800 hover:bg-black hover:text-white cursor-pointer transition"
              >
                <FaGithub />
              </motion.li>
            </Link>
            <Link to="https://twitter.com/thesawan_kumar" target="_blank">
              <motion.li
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 px-3 py-3 rounded-full bg-gray-100 text-gray-800 hover:bg-sky-400 hover:text-white cursor-pointer transition"
              >
                <FaTwitter />
              </motion.li>
            </Link>
          </motion.ul>
        </div>

        {/* Right: Email & Location */}
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-[45%]">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex gap-2 bg-white px-4 py-3 rounded-xl shadow-md w-full hover:shadow-xl transition"
          >
            <CiMail className="text-blue-500" />
            <h1 className="text-sm md:text-base break-all text-gray-700">sawankushwaha222@gmail.com</h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex gap-2 bg-white px-4 py-3 rounded-xl shadow-md w-full hover:shadow-xl transition"
          >
            <CiLocationOn className="text-blue-500" />
            <h1 className="text-sm md:text-base text-gray-700">
              Bengaluru, Karnataka, India - 560067
            </h1>
          </motion.div>
        </div>
      </motion.section>

      <hr className="bg-gray-300 w-full" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center mt-4"
      >
        <h1 className="text-base md:text-lg text-gray-800 font-medium">
          Designed With ❤️ By <span className="text-red-500">Sawan Kumar</span>
        </h1>
      </motion.div>
    </section>
  );
};

export default Footer;
