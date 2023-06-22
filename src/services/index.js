import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}api/`,
});
const createTestData = (payload, start, callback, error, next) => {
  start();
  return client
    .post(`/tester`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const getTestData = (params, start, callback, error, next) => {
  start();
  return client
    .get(`/tester`, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

export const services = { createTestData, getTestData };
