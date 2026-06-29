import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"; 


const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
      : "text-gray-700 hover:text-indigo-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow">
      <div className="container-xl lg:container mx-auto px-6 py-4 flex justify-between items-center">

        <Link
  to="/"
  className="flex items-center"
>
  <img
    src={logo}
    alt="ReactJobs"
    className="h-12 object-contain"
  />
   </Link>

        <div className="flex items-center gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/jobs" className={linkClass}>
            Jobs
          </NavLink>

          <NavLink to="/add-job" className={linkClass}>
            Add Job
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;