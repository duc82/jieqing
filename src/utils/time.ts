const formatSeconds = (time: number): string => {
  return Math.floor((time % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");
};

const formatMinutes = (time: number): string => {
  return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
};

const formatHours = (time: number): string => {
  return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
};

const formatDays = (time: number): string => {
  return Math.floor(time / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
};

const getYears = (time: number) => new Date(time).getFullYear();

const getMonths = (time: number) => new Date(time).getMonth() + 1;

const getDates = (time: number) => new Date(time).getDate();

const getHours = (time: number) => new Date(time).getHours();

const getMinutes = (time: number) => new Date(time).getMinutes();

export {
  formatSeconds,
  formatMinutes,
  formatHours,
  formatDays,
  getYears,
  getMonths,
  getDates,
  getHours,
  getMinutes,
};
