import { Link } from "react-router-dom";
import { FaCode, FaBuilding } from "react-icons/fa";

const HomeCards = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container-xl lg:container m-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Developer Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-100">

            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-5">
              <FaCode className="text-3xl text-indigo-600" />
            </div>

            <h2 className="text-3xl font-bold mb-3">
              For Developers
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              Explore thousands of React jobs from startups and top tech
              companies worldwide.
            </p>

            <Link
              to="/jobs"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition"
            >
              Browse Jobs →
            </Link>

          </div>

          {/* Employer Card */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl shadow-lg p-8 text-white hover:shadow-2xl transition duration-300">

            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-5">
              <FaBuilding className="text-3xl text-indigo-600" />
            </div>

            <h2 className="text-3xl font-bold mb-3">
              For Employers
            </h2>

            <p className="leading-7 mb-6">
              Find the perfect React developer for your company in just a few
              clicks.
            </p>

            <Link
              to="/add-job"
              className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Post a Job →
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeCards;