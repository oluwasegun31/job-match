import React, { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";

const JobDetails = () => {
  const { selectedJob, userSkills, setSelectedJob } = useContext(JobContext);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!selectedJob) return null;

  const handleApply = () => {
    const missingSkills = selectedJob.requiredSkills.filter(
      (skill) => !userSkills.includes(skill)
    );

    if (missingSkills.length > 0) {
      setIsError(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsSuccess(true);
        setIsLoading(false);
      }, 2000); // set timeout of 2 seconds to simulate an api request of 2 sec to resolve success
    }
  };

  const missingSkills = selectedJob.requiredSkills.filter(
    (skill) => !userSkills.includes(skill)
  );
  const closeModal = () => {
    setIsSuccess(false);
    setIsError(false);
    setSelectedJob(null);
  };
  return (
    <section
      className="fixed inset-0 bg-light/10 backdrop-blur-lg flex justify-center items-center"
      onClick={() => setSelectedJob(null)}
    >
      <div
        className="bg-white sm:p-6 p-4 rounded-lg lg:w-1/2 md:w-[700px] w-[92%] flex flex-col justify-start items-start gap-0.5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="sm:text-2xl text-xl font-bold">{selectedJob.title}</h2>
        <p className="text-base font-semibold">{selectedJob.company}</p>
        <p className="text-base font-semibold">{selectedJob.location}</p>
        <p className="text-base font-semibold">{selectedJob.salary}</p>
        <h3 className="mt-4 font-bold sm:text-xl text-base">
          Required Skills:
        </h3>
        <ul className="w-full flex justify-start items-center gap-2 flex-wrap">
          {selectedJob.requiredSkills.map((skill) => (
            <li
              key={skill}
              className={`px-2 py-1 text-sm rounded-full font-semibold text-light ${
                userSkills.includes(skill) ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {skill}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-bold sm:text-xl text-base">Missing Skills:</p>
        <ul className="flex justify-start items-start gap-2 flex-wrap w-full">
          {missingSkills.length > 0 ? (
            missingSkills.map((skill, index) => (
              <li
                key={index}
                className="px-2 py-1 text-sm rounded-full font-semibold text-light bg-red-500"
              >
                {skill}
              </li>
            ))
          ) : (
            <li className="text-green-500 font-medium text-sm">
              No missing skill
            </li>
          )}
        </ul>
        {isError && (
          <p className="text-red-500 leading-none mt-2 font-semibold sm:text-base text-sm">
            You are missing the following skills: {missingSkills.join(", ")}.
            Consider upskilling before applying!
          </p>
        )}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-6 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          onClick={handleApply}
          disabled={isError || isLoading || isSuccess}
        >
          {isLoading
            ? "Applying..."
            : isSuccess
            ? "Applied Successfully."
            : "Apply Now"}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute top-2 right-2 lucide lucide-x stroke-dark sm:size-8 size-5 cursor-pointer"
          onClick={() => closeModal()}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </div>
    </section>
  );
};

export default JobDetails;
