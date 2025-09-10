import { CircleUserRound } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center my-10 lg:my-6 mx-4 gap-10 lg:gap-20 h-full lg:h-screen"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-3 items-center"
      >
        <CircleUserRound size={30} className="text-primary" />
        <h1 className="text-xl lg:text-2xl font-bold text-secondary">
          About Me
        </h1>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-evenly items-center w-full gap-10 lg:gap-20">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative w-full lg:w-[40%]"
        >
          {/* Glow Effects */}
          <div className="hidden lg:flex absolute w-44 h-44 -top-16 left-28 rounded-full bg-primary -z-10 filter blur-xl opacity-70"></div>
          <img
            src="/assets/profile.png"
            className="h-40 lg:h-80 rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
          />
          <div className="hidden lg:flex absolute w-44 h-44 -bottom-16 right-28 rounded-full bg-primary -z-10 filter blur-xl opacity-70"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start w-full lg:w-[50%] gap-4 text-center lg:text-left"
        >
          <h1 className="text-xl lg:text-3xl font-semibold">
            I&apos;m <span className="text-primary">Sawan Kumar</span>
          </h1>
          <p className="text-lg lg:text-2xl font-semibold text-secondary">
            Full Stack Developer 🧑🏽‍💻
          </p>
          <p className="my-4 text-sm lg:text-lg leading-relaxed text-gray-700">
            Full Stack Developer with <strong>3 internships</strong> and hands-on
            experience in <strong>React, Node.js, Next.js, Spring Boot, and MongoDB</strong>.
            Skilled in building <strong>scalable, cloud-deployed applications</strong> and
            <strong> real-time platforms</strong>, with projects like
            <strong> ImagineX, NoteSphere, and SnapBuy</strong>.
            Solved <strong>1000+ DSA problems</strong>, demonstrating strong
            <strong> problem-solving</strong>, <strong>clean coding</strong>, and effective
            <strong> communication skills</strong> with proven
            <strong> teamwork abilities</strong>.
            Actively seeking <strong>entry-level Software Developer roles</strong>.
          </p>

          <p className="text-sm lg:text-lg">
            <span className="text-primary font-semibold">📍 Location: </span>
            Bengaluru, Karnataka, 560067
          </p>
          <p className="text-sm lg:text-lg">
            <span className="text-primary font-semibold">📧 Email: </span>
            sawankushwaha222@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
