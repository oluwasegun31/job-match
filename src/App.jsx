import "./App.css";
import React, { useState, useEffect } from "react";
import { JobList, JobDetails, Hero, Navbar } from "./components";
import { fetchJobs } from "./services/api";
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      setIsLoading(true);
      const data = await fetchJobs();
      setJobs(data);
      setIsLoading(false);
    };
    getJobs();
  }, []);

  return (
    <div className="flex flex-col justify-start items-start w-full">
      <Navbar />
      <Hero />
      <div className="w-full flex flex-col justify-start items-start mt-16 md:px-6 px-4 pb-24">
        <JobList jobs={jobs} isLoading={isLoading} />
        <JobDetails />
      </div>
    </div>
  );
}

export default App;
