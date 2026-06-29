import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaBuilding
} from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 120) + "...";
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

      <div className="p-6">

        <div className="flex justify-between items-start mb-5">

          <div>

            <span className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full">
              {job.type}
            </span>

            <h3 className="text-2xl font-bold mt-3">
              {job.title}
            </h3>

          </div>

          <div className="bg-green-100 text-green-700 px-3 py-2 rounded-xl font-semibold">
            {job.salary}
          </div>

        </div>

        <div className="flex items-center text-gray-500 mb-3">
          <FaBuilding className="mr-2" />
          {job.company.name}
        </div>

        <div className="flex items-center text-gray-500 mb-4">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          {job.location}
        </div>

        <p className="text-gray-600 leading-7">
          {description}
        </p>

        <button
          onClick={() =>
            setShowFullDescription(!showFullDescription)
          }
          className="text-indigo-600 mt-4 hover:underline"
        >
          {showFullDescription ? "Show Less" : "Read More"}
        </button>

        <hr className="my-6" />

        <div className="flex justify-between items-center">

          <div className="flex items-center text-gray-600">
            <FaBriefcase className="mr-2" />
            React Developer
          </div>

          <Link
            to={`/jobs/${job.id}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default JobListing;