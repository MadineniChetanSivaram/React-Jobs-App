import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 text-white">

      <div className="container-xl lg:container mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-widest text-indigo-200 mb-3">
              Welcome to ReactJobs
            </p>

            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Find Your
              <span className="text-yellow-300"> Dream </span>
              React Developer Job
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explore thousands of React developer opportunities from top
              companies around the world.
            </p>

            <div className="flex gap-4">

              <Link
                to="/jobs"
                className="bg-white text-indigo-700 px-7 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Browse Jobs
              </Link>

              <Link
                to="/add-job"
                className="bg-yellow-400 text-black px-7 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Post a Job
              </Link>

            </div>

          </div>

          <div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">

              <h2 className="text-black text-2xl font-bold mb-6">
                Platform Statistics
              </h2>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-indigo-100 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-indigo-700">
                    1200+
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Jobs
                  </p>
                </div>

                <div className="bg-purple-100 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-purple-700">
                    350+
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Companies
                  </p>
                </div>

                <div className="bg-green-100 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-green-700">
                    95%
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Hiring Rate
                  </p>
                </div>

                <div className="bg-yellow-100 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-yellow-700">
                    24/7
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Support
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;