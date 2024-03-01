import { Contact2 } from "lucide-react";
import EmailForm from "../components/EmailForm";

const Contact = () => {
  return (
    <section id="contact" className="relative flex flex-col justify-center items-center my-8 h-screen gap-10">
        <img src="/assets/blob1.svg" className="hidden lg:flex h-52 absolute right-0 top-3"/>
      <div className="flex gap-3 items-center">
        <Contact2 size={52} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">Contact</h1>
      </div>
      <div className="flex lg:justify-between lg:items-start lg:gap-12">
        <div className="hidden lg:flex lg:flex-col w-[45%] my-24 mx-5">
          <h1 className="text-5xl font-semibold text-secondary">Let&apos;s <span className="text-primary">Chat.</span></h1>
          <h1 className="text-4xl font-semibold mt-2 break-normal text-secondary">Tell me something about yourself.</h1>
          <p className="text-xl text-black/80 mt-6">Let&apos;s create something together</p>
        </div>
        <div className="lg:w-[50%] flex items-center justify-center">
          <div className="flex flex-col justify-center items-start w-80 lg:w-[28rem] my-2 py-6 px-6 gap-3 bg-white shadow-xl shadow-zinc-400 border-2 border-black/10 rounded-2xl">
            <h1 className="text-xl lg:text-2xl font-semibold">Send me a message 🚀</h1>
            <div>
              <EmailForm/>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/blob2.svg" className="hidden lg:flex h-72 absolute left-36 bottom-0"/>
    </section>
  );
};

export default Contact;
