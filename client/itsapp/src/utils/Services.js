import axios from "axios";

export const baseUrl =
  process.env.REACT_APP_ENVIRONMENT === "DEV"
    ? "http://localhost:5000"
    : "https://itsapp.onrender.com";
export const postRequest = async (url, data) => {
  try {
    const sendRequest = await axios.post(url, data);
    return { data: sendRequest, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};

export const getRequest = async (url) => {
  try {
    const getRequest = await axios.get(url);
    return { data: getRequest, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};
