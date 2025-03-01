export const calculateMatchScore = (requiredSkills, userSkills) => {
  const matchedSkills = requiredSkills.filter((skill) =>
    userSkills.includes(skill)
  );
  const matchScore = (matchedSkills.length / requiredSkills.length) * 100;
  return Math.round(matchScore);
};
