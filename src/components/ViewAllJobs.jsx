import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (

    <section className="m-auto max-w-lg my-12 px-6">

      <Link

        to="/jobs"

        className="block bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white text-center py-4 rounded-2xl text-lg font-semibold transition"

      >

        Explore All Jobs →

      </Link>

    </section>

  );
};

export default ViewAllJobs;