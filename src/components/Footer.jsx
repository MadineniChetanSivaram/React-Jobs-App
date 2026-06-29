import { FaGithub, FaLinkedin, FaInstagram, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; 


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">

      <div className="container-xl lg:container mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

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

            <p className="text-gray-400 leading-7">
              Find your dream React Developer job and connect with
              the best companies around the world.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="/" className="hover:text-indigo-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/jobs" className="hover:text-indigo-400 transition">
                  Browse Jobs
                </a>
              </li>

              <li>
                <a href="/add-job" className="hover:text-indigo-400 transition">
                  Add Job
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect With Us
            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="#"
                className="hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <div className="text-center text-gray-400">

          © 2026 ReactJobs. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;