import { Contact2 } from "lucide-react";
import EmailForm from "../components/EmailForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center py-6 bg-off-white"
    >
      {/* Decorative Blob */}
      <img
        src="/assets/blob1.svg"
        className="hidden lg:flex h-20 absolute right-0 top-3 opacity-20"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-3 items-center mb-12"
      >
        <Contact2 size={26} className="text-primary" />
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-secondary">
          Contact
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-12 w-full px-4 lg:px-20">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden lg:flex flex-col w-[45%] gap-4 my-12"
        >
          <h1 className="text-5xl font-semibold text-secondary">
            Let&apos;s <span className="text-primary">Chat.</span>
          </h1>
          <h2 className="text-4xl font-semibold text-secondary mt-2">
            Tell me something about yourself.
          </h2>
          <p className="text-xl text-gray-700 mt-6">
            Let&apos;s create something together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center lg:w-[50%] w-full"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col w-full max-w-md bg-white shadow-xl shadow-zinc-400 border-2 border-black/10 rounded-2xl p-6 gap-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              Send me a message 🚀
            </h2>
            <EmailForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
