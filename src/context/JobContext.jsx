import React, { createContext, useState } from "react";
export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [userSkills] = useState(["React", "JavaScript", "CSS", "Tailwind CSS"]); // Mock user skills
  const [selectedJob, setSelectedJob] = useState(null); // Selected job state

  return (
    <JobContext.Provider value={{ userSkills, selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
};
