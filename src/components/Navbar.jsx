import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center">
      {/* ✅ Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex gap-16 px-16 py-4 items-center justify-center rounded-3xl 
          shadow-lg shadow-zinc-300/50 backdrop-blur-md bg-white/70 border border-zinc-200"
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-lg font-semibold text-gray-700 hover:text-cyan-600 transition-colors"
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>

      {/* ✅ Mobile Topbar */}
      <div className="lg:hidden w-full px-6 flex justify-between items-center">
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-cyan-600 to-indigo-600 text-transparent bg-clip-text">
          Sawan
        </h1>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-md hover:shadow-lg transition flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={26} className="text-red font-bold" /> // ✅ Black X for visibility
          ) : (
            <Menu size={26} className="text-white" /> // ✅ White Menu for contrast
          )}
        </motion.button>
      </div>

      {/* ✅ Mobile Menu Drawer */}
      {/* ✅ Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden fixed rounded-md top-16 right-0 h-[calc(100%-4rem)] w-2/3 bg-white/90 backdrop-blur-xl shadow-2xl flex flex-col gap-6 p-6 z-50 border-l border-gray-200"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-xs font-medium text-gray-700 hover:text-cyan-600 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
