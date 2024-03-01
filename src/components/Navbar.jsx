
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="hidden lg:flex gap-16 mt-2 mx-20 px-16 py-4 items-center justify-center rounded-3xl shadow-2xl shadow-zinc-400 backdrop-blur-md text-secondary border-2 border-zinc-200">
        <Link to="/">
          <p className="text-xl font-semibold hover:cursor-pointer hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Home
          </p>
        </Link>
        <Link to="#about">
          <p className="text-xl font-semibold hover:cursor-pointer hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            About
          </p>
        </Link>
        <Link to="#skills">
          <p className="text-xl font-semibold hover:cursor-pointer hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Skills
          </p>
        </Link>
        <Link to="#education">
          <p className="text-xl font-semibold hover:cursor-pointer hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Education
          </p>
        </Link>
        <Link to="#projects">
          <p className="text-xl font-semibold hover:cursor-pointer hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Projects
          </p>
        </Link>
        <Link to="#contact">
          <p className="text-xl font-semibold hover:cursor-pointer hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Contact
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
