import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Importing MUI icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

const navItems = [
  { id: "home", icon: <HomeOutlinedIcon fontSize="medium" />, label: "Home" },
  { id: "about", icon: <PersonOutlineOutlinedIcon fontSize="medium" />, label: "About" },
  { id: "skills", icon: <LaptopOutlinedIcon fontSize="medium" />, label: "Skills" },
  { id: "education", icon: <SchoolOutlinedIcon fontSize="medium" />, label: "Education" },
  { id: "experience", icon: <WorkOutlineOutlinedIcon fontSize="medium" />, label: "Experience" },
  { id: "projects", icon: <CodeOutlinedIcon fontSize="medium" />, label: "Projects" },
  { id: "contact", icon: <ContactMailOutlinedIcon fontSize="medium" />, label: "Contact" },
];

const MobileNavbar = () => {
  return (
    <section className="lg:hidden sticky bottom-3 z-50 w-full flex justify-center">
      <div className="flex justify-evenly items-center w-[95%] sm:w-[80%] bg-gradient-to-r from-cyan-50 via-white to-indigo-50/80 backdrop-blur-md border border-zinc-200 rounded-2xl py-3 shadow-xl">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <Link
              to={`#${item.id}`}
              className="text-gray-600 hover:text-cyan-600 transition-colors duration-300"
            >
              {item.icon}
            </Link>

            {/* Tooltip on hover */}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobileNavbar;
