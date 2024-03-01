import { CircleUserRound } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center my-20 lg:my-6 mx-4 gap-8 lg:gap-20 h-full
     lg:h-screen"
    >
      <div className="flex gap-3 items-center">
        <CircleUserRound size={50} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">
          About Me
        </h1>
      </div>
      <div className="flex flex-col gap-y-10 lg:flex-row justify-evenly items-center">
        <div className="w-[45%] flex justify-center relative">
          <div className="hidden lg:flex absolute w-44 h-44 -top-16 left-28 rounded-full bg-primary -z-10 filter blur-xl opacity-70"></div>
          <img
            src="/assets/profile.png"
            className="h-40 lg:h-80 rounded-3xl shadow-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <div className="hidden lg:flex absolute w-44 h-44 -bottom-16 right-28 rounded-full bg-primary -z-10 filter blur-xl opacity-70"></div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-[40%] gap-2">
          <h1 className="text-xl lg:text-3xl font-semibold">
            I&apos;m Sawan Kumar
          </h1>
          <p className="text-lg lg:text-2xl font-semibold">
            Full Stack Developer 🧑🏽‍💻
          </p>
          <p className="break-normal my-5 text-xs lg:text-lg">
            Passionate about web development, I&apos;m on a journey to craft
            experiences that truly connect with people. I love exploring new
            trends and techniques, always pushing the boundaries of what&apos;s
            possible. For me, it&apos;s about more than just code, it&apos;s
            about creating something meaningful that makes a difference in
            people&apos;s lives.
          </p>
          <p className="text-md lg:text-lg">
            <span className="text-primary font-semibold">Location: </span>Patna,
            Bihar, 800006
          </p>
          <p className="text-md lg:text-lg">
            <span className="text-primary font-semibold">Email: </span>
            sawankushwaha222@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
