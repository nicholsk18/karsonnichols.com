export const siteConfig = {
  startDate: "2019-09-01",
  projectsDelivered: 100,
  responseTime: "24h",
};

export const getYearsOfExperience = () => {
  return new Date().getFullYear() - new Date(siteConfig.startDate).getFullYear();
};
