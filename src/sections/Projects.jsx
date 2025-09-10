import { ArrowUpRight, Code2 } from "lucide-react";
import { data } from "../constants/projectsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Container animation (stagger children)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Card animation (fade + slide-up)
const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-off-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-2 mb-12"
      >
        <Code2 size={36} className="text-primary" />
        <h1 className="text-xl md:text-2xl font-bold text-secondary">
          Projects
        </h1>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-16"
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            variants={card}
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300"
          >
            {/* Title */}
            <h2 className="text-md md:text-lg font-semibold text-gray-800 text-center mb-2">
              {item.label}
            </h2>

            {/* Image */}
            <motion.img
              src={item.imgSrc}
              alt={item.label}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-36 md:h-44 rounded-lg object-cover mb-3"
            />

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-600 text-center mb-4">
              {item.desc}
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <Link to={item.view} target="_blank">
                  <button className="bg-cyan-500 flex items-center gap-1 px-4 py-1.5 text-xs md:text-sm text-white font-medium rounded-md shadow hover:shadow-lg transition">
                    View <ArrowUpRight size={16} />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
