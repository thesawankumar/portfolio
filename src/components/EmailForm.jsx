import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_d4ubllg";
    const templateId = "template_jf7k12o";
    const publicKey = "VjZK3MFeMHV-GLiC2";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sawan Kumar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        toast.success("Message Sent Successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error in sending email:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-start gap-5"
    >
      <input
        type="text"
        placeholder="Your Name*"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="py-1 px-2 rounded-lg w-full text-md lg:text-lg bg-blue-50 outline-blue-200"
      />
      <input
        type="email"
        placeholder="Email Address*"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="py-1 px-2 rounded-lg w-full text-md lg:text-lg bg-blue-50 outline-blue-200"
      />
      <textarea
        cols={30}
        rows={5}
        placeholder="Type Your Message Here*"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="py-2 px-2 rounded-lg w-full text-md lg:text-lg bg-blue-50 outline-blue-200"
      ></textarea>
      <button
        type="submit"
        className="bg-cyan-600 flex gap-1 px-6 lg:px-10 py-2 text-white text-md lg:text-lg font-semibold rounded-xl hover:text-primary hover:bg-secondary text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Send
        <Send size={20} className="mt-1" />
      </button>
      <ToastContainer />
    </form>
  );
};

export default EmailForm;
