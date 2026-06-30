import {
  Link,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBuilding,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Swal from "sweetalert2";

const JobPage = ({ deleteJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

 const onDeleteClick = async (jobId) => {
  const result = await Swal.fire({
    title: "Delete Job?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4F46E5",
    cancelButtonColor: "#EF4444",
    confirmButtonText: "Yes, Delete",
    cancelButtonText: "Cancel",
    background: "#ffffff",
    color: "#1f2937",
    customClass: {
    popup: "rounded-3xl",
  },
    
  });

  if (!result.isConfirmed) return;

  await deleteJob(jobId);

  Swal.fire({
    title: "Deleted!",
    text: "Job deleted successfully.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });

  navigate("/jobs");
};
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-14">
      <div className="container-xl lg:container mx-auto px-4">
        <Link
          to="/jobs"
          className="inline-flex items-center bg-white px-5 py-3 rounded-xl shadow hover:shadow-lg transition text-indigo-700 font-semibold"
        >
          ← Back to Jobs
        </Link>

        <div className="grid lg:grid-cols-3 gap-10 mt-8">
          {/* Left Side */}

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold">
                {job.type}
              </span>

              <h1 className="text-5xl font-extrabold mt-6 text-slate-800">
                {job.title}
              </h1>

              <div className="flex items-center mt-6 text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                {job.location}
              </div>

              <div className="inline-flex items-center mt-6 bg-green-100 text-green-700 px-5 py-3 rounded-xl font-bold">
                <FaMoneyBillWave className="mr-2" />
                {job.salary}
              </div>

              <hr className="my-8" />

              <h2 className="text-3xl font-bold text-indigo-700 mb-5">
                Job Description
              </h2>

              <p className="leading-8 text-gray-600">
                {job.description}
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">
                🏢 Company Information
              </h2>

              <div className="flex items-center mb-4">
                <FaBuilding className="mr-3 text-indigo-600" />
                <span className="font-semibold">{job.company.name}</span>
              </div>

              <p className="text-gray-600 mb-6">
                {job.company.description}
              </p>

              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-3 text-indigo-600" />
                {job.company.contactEmail}
              </div>

              <div className="flex items-center">
                <FaPhone className="mr-3 text-indigo-600" />
                {job.company.contactPhone}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">
                Manage Job
              </h2>

              <Link
                to={`/edit-job/${job.id}`}
                className="block w-full text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                ✏️ Edit Job
              </Link>

              <button
                onClick={() => onDeleteClick(job.id)}
                className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-700 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                🗑 Delete Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(
    `https://6a43c9af6dba791499ab6549.mockapi.io/jobs/${params.id}`
  );

  return await res.json();
};

export { jobLoader };

export default JobPage;