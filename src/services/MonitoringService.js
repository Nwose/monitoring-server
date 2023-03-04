import http from "./http-common";

const getAll = () => {
  return http.get("/v1/candidates/session/1/center/001");
};

const getAllFastest = () => {
  return http.get("/v1/candidates/session/1/center/001/fastest-finger-center-candidates");
};

const getAllMalpractice = () => {
  return http.get("/v1/candidates/session/1/center/001/fastest-finger-center-candidates");
};


const MonitoringService = {
  getAll,
  getAllFastest,
  getAllMalpractice
};

export default MonitoringService;