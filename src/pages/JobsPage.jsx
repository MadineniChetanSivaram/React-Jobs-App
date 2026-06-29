import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <section className="bg-slate-100 min-h-screen py-12">

      <div className="container-xl lg:container mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-extrabold text-indigo-700">
            Browse Jobs
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Explore the latest React Developer opportunities.
          </p>

        </div>

        <JobListings />

      </div>

    </section>
  );
};

export default JobsPage;