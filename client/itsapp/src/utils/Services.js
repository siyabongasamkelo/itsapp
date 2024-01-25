import axios from "axios";

export const baseUrl = "http://localhost:5000";
export const postRequest = async (url, data) => {
  try {
    const registerUser = await axios.post(url, data);
    return { data: registerUser, error: false };
  } catch (error) {
    return { data: error, error: true };
  }
};
