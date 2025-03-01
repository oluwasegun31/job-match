export const fetchJobs = async () => {
  const response = await new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch("/mockData.json");
      resolve(res);
    }, 2000); // 2-second delay
  });
  return response.json();
};
