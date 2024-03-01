import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="flex flex-col gap-4 bg-blue-600 py-6">
      <section className="flex flex-col lg:flex-row justify-evenly items-center gap-8 bg-secondary py-8 px-6">
        <div className="flex flex-col gap-2 justify-center items-start">
          <h1 className="text-3xl font-semibold text-white">Get In Touch 📞</h1>
          <p className="text-lg text-white/80 break-normal">
            Thank you for visiting my personal portfolio website.
          </p>
          <p className="text-lg text-white/80 break-normal">
            Connect with me over socials.
          </p>
          <div className="flex gap-5 justify-center items-center mt-3">
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
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-2 bg-white px-3 py-2 rounded-xl shadow-lg w-full hover:-translate-y-2 transition">
            <CiMail className="text-primary" />
            <h1 className="text-md">sawankushwaha222@gmail.com</h1>
          </div>
          <div className="flex gap-2 bg-white px-3 py-2 rounded-xl shadow-lg w-full hover:translate-y-2 transition">
            <CiLocationOn className="text-primary" />
            <h1>Asansol, West Bengal, India - 713303</h1>
          </div>
        </div>
      </section>
      <hr className="bg-white w-full" />
      <div className="flex justify-center items-center">
        <h1 className="text-lg text-white font-semibold">
          Designed With ❤️ By <span className="text-red">Sawan Kumar</span>
        </h1>
      </div>
    </section>
  );
};

export default Footer;
