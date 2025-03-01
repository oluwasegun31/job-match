import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { calculateMatchScore } from "../utils/jobAction";
import Skeleton from "./CardSkeleton";

const JobList = ({ jobs, isLoading }) => {
  const { setSelectedJob, userSkills } = useContext(JobContext);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 font-jakarta w-full">
      {isLoading && <Skeleton />}
      {jobs?.map((job) => (
        <div
          key={job.id}
          className="px-4 py-8 border border-dark/20 rounded-md transition-all duration-300 bg-white overflow-hidden cursor-default hover:scale-105"
        >
          <h3 className="text-lg md:text-xl font-bold whitespace-nowrap w-full text-ellipsis overflow-hidden">
            {job.title}
          </h3>
          <p className="text-base font-medium">{job.company}</p>
          <p className="text-base font-medium">{job.location}</p>
          <p className="text-base font-medium">{job.salary}</p>
          <div className="mt-2 flex items-center">
            <span
              className={`px-2 py-1 rounded-full text-sm font-semibold text-white ${
                calculateMatchScore(job.requiredSkills, userSkills) >= 80
                  ? "bg-green-500"
                  : calculateMatchScore(job.requiredSkills, userSkills) >= 50
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            >
              {calculateMatchScore(job.requiredSkills, userSkills)}%
            </span>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-1 px-4 rounded cursor-pointer outline-none"
            onClick={() => setSelectedJob(job)}
          >
            View Job Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
