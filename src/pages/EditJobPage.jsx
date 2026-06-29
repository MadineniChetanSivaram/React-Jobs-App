import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();

  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJobSubmit(updatedJob);

    toast.success('🎉 Job Updated Successfully');

    navigate(`/jobs/${id}`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16">

      <div className="max-w-5xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-emerald-500 to-green-700 text-white p-10">

            <h1 className="text-5xl font-extrabold">
              Update Job
            </h1>

            <p className="mt-3 text-green-100 text-lg">
              Edit the details below and update the job posting.
            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={submitForm}
            className="p-10 space-y-8"
          >

            {/* Job Type */}

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Job Type
              </label>

              <select
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>

            </div>

            {/* Job Title */}

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Job Title
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

            </div>

            {/* Description */}

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Job Description
              </label>

              <textarea
                rows="6"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Salary */}

              <div>

                <label className="block text-gray-700 font-semibold mb-2">
                  Salary
                </label>

                <select
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option>Under $50K</option>
                  <option>$50K - $60K</option>
                  <option>$60K - $70K</option>
                  <option>$70K - $80K</option>
                  <option>$80K - $90K</option>
                  <option>$90K - $100K</option>
                  <option>$100K - $125K</option>
                  <option>$125K - $150K</option>
                  <option>$150K - $175K</option>
                  <option>$175K - $200K</option>
                  <option>Over $200K</option>
                </select>

              </div>

              {/* Location */}

              <div>

                <label className="block text-gray-700 font-semibold mb-2">
                  Location
                </label>

                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />

              </div>

            </div>

                        {/* Company Information */}

            <div className="border-t pt-10">

              <h2 className="text-3xl font-bold text-green-700 mb-8">
                Company Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Company Name */}

                <div>

                  <label className="block text-gray-700 font-semibold mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />

                </div>

                {/* Contact Email */}

                <div>

                  <label className="block text-gray-700 font-semibold mb-2">
                    Contact Email
                  </label>

                  <input
                    type="email"
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="hr@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                  />

                </div>

              </div>

              {/* Company Description */}

              <div className="mt-6">

                <label className="block text-gray-700 font-semibold mb-2">
                  Company Description
                </label>

                <textarea
                  rows="5"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                  placeholder="Describe your company..."
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>

              </div>

              {/* Contact Phone */}

              <div className="mt-6">

                <label className="block text-gray-700 font-semibold mb-2">
                  Contact Phone
                </label>

                <input
                  type="tel"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="+91 9876543210"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />

              </div>

            </div>

            {/* Update Button */}

            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-green-700 text-white text-lg font-bold py-4 rounded-xl hover:scale-[1.02] hover:shadow-xl transition duration-300"
            >
              ✏️ Update Job
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default EditJobPage;