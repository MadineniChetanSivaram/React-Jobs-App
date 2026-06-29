import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
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

    addJobSubmit(newJob);

    toast.success('🎉 Job Added Successfully');

    return navigate('/jobs');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16">

      <div className="max-w-5xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-10">

            <h1 className="text-5xl font-extrabold">
              Post a New Job
            </h1>

            <p className="mt-3 text-indigo-100 text-lg">
              Fill in the details below to publish your React Developer job.
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
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none"
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
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Senior React Developer"
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
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                placeholder="Describe responsibilities, skills and expectations..."
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
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none"
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
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Bengaluru, India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />

              </div>

            </div>

                        {/* Company Information */}

            <div className="border-t pt-10">

              <h2 className="text-3xl font-bold text-indigo-700 mb-8">
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
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Google"
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
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none"
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
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  placeholder="Tell candidates about your company..."
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />

              </div>

              {/* Contact Phone */}

              <div className="mt-6">

                <label className="block text-gray-700 font-semibold mb-2">
                  Contact Phone
                </label>

                <input
                  type="tel"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="+91 9876543210"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />

              </div>

            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-lg font-bold py-4 rounded-xl hover:scale-[1.02] hover:shadow-xl transition duration-300"
            >
              🚀 Publish Job
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default AddJobPage;