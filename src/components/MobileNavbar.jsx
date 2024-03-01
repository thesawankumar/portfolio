import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FcGraduationCap } from "react-icons/fc";
import { CiHome, CiUser, CiMonitor } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <section className="lg:hidden sticky bottom-0 bg-white z-10 flex justify-evenly items-center py-4 px-1 border-t border-zinc-200">
      <Link to="#home">
        <CiHome
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#about">
        <CiUser
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#skills">
        <CiMonitor
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#education">
        <FcGraduationCap
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#projects">
        <FaCode
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
      <Link to="#contact">
        <MdOutlinePermContactCalendar
          strokeWidth={3}
          className="text-secondary hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </Link>
    </section>
  );
};

export default MobileNavbar;
