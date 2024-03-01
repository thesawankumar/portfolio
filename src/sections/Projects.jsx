import { ArrowUpRight, Code2, SearchCode } from "lucide-react";
import { data } from "../constants/projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-10 py-12 bg-off-white"
    >
      <div className="flex gap-3 items-center">
        <Code2 size={52} className="text-primary" />
        <h1 className="text-3xl lg:text-5xl font-bold text-secondary">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-8 justify-center items-center w-30 mx-3 lg:w-[25rem] px-4 py-6 bg-gray-500 rounded-2xl shadow-xl shadow-zinc-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <h1 className="text-xl lg:text-2xl font-semibold text-white">
              {item.label}
            </h1>
            <img
              src={item.imgSrc}
              className="h-30 w-full lg:h-56 rounded-xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300"
            />
            <p className="text-xs lg:text-lg text-white">{item.desc}</p>
            <div className="flex gap-x-28 lg:gap-x-40">
              <Link to={item.view} target="_blank">
                <button className="bg-cyan-500 flex gap-1 px-2 py-1 text-sm lg:text-lg lg:px-5 lg:py-2 text-white font-semibold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  View
                  <ArrowUpRight size={24} />
                </button>
              </Link>
              <Link to={item.code} target="_blank">
                <button className="bg-red-500 flex gap-1 px-2 py-1 text-sm lg:text-lg lg:px-5 lg:py-2 text-white font-semibold rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  Code
                  <SearchCode size={24} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
