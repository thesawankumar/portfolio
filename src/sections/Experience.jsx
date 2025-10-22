import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// Experience data
const experienceData = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Unique Tutor Arc Pvt.",
    duration: "03/2025 – 08/2025",
    location: "Delhi",
    bullets: [
      "Spearheaded development of an interactive trading simulation platform using React and Redux with real-time market data and portfolio tracking, increasing engagement by 20%.",
      "Built a comprehensive admin dashboard with Chart.js for trade visualization, boosting management efficiency by 25%.",
    ],
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "BoothBloom",
    duration: "12/2024 – 02/2025",
    location: "Bengaluru",
    bullets: [
      "Forged real-time availability tracking for the BoothBloom platform using Node.js, Express, and MongoDB, improving page load times by 0.7s.",
      "Engineered secure JWT role-based authentication, real-time availability tracking, and payment integration, reducing authentication errors by 15%.",
    ],
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "MELE (Make Engineer's Life Easy)",
    duration: "08/2024 – 10/2024",
    location: "Chennai",
    bullets: [
      "Deployed a scalable cloud-based solution leveraging AWS services, reducing server costs by 30% and achieving 99.9% uptime.",
      "Optimized code and implemented best practices, improving application security, reducing load times by 35%, and enhancing overall stability.",
    ],
  },
];

// Variants for animation
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

const Experience = () => {
  return (
    <section id="experience" className="mt-10 bg-off-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-3 mb-12"
      >
        <Briefcase size={32} className="text-primary" />
        <h1 className="text-xl md:text-2xl font-bold text-secondary">
          Experience
        </h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-8 px-6 lg:px-20 max-w-5xl mx-auto"
      >
        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            variants={card}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            {/* Role + Company */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-secondary">
                {exp.role}, <span className="text-primary">{exp.company}</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                {exp.duration} | {exp.location}
              </p>
            </div>

            {/* Bullets */}
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
