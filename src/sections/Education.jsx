import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science Engineering",
    school: "Asansol Engineering College",
    year: "2021 - 2025 | Pursuing",
    img: "assets/college.jpg",
  },
  {
    id: 2,
    degree: "Higher Secondary in Science",
    school: "B N's Collegiate School, Patna, Bihar",
    year: "2019 - 2021 | Completed",
    img: "assets/school.jpg",
  },
];

// Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

const Education = () => {
  return (
    <section id="education" className="mt-8 bg-off-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-3 mb-12"
      >
        <GraduationCap size={30} className="text-primary" />
        <h1 className="text-2xl md:text-2xl font-bold text-secondary">
          Education
        </h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-8 items-center justify-center px-6 lg:px-20"
      >
        {educationData.map((item) => (
          <motion.div
            key={item.id}
            variants={card}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xl overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.school}
              className="h-40 lg:h-48 w-full lg:w-64 object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-center gap-2 p-5">
              <h2 className="text-lg md:text-xl font-semibold text-secondary">
                {item.degree}
              </h2>
              <p className="text-sm md:text-base text-gray-700">{item.school}</p>
              <p className="text-sm md:text-base font-semibold text-primary">
                {item.year}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
