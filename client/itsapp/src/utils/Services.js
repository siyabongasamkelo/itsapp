import axios from "axios";

export const baseUrl = "http://localhost:5000";
export const postRequest = async (url, data) => {
  console.log({ data });
  axios
    .post(url, data)
    .then((res) => {
      console.log(res);
      return { data: res, error: false };
    })
    .catch((err) => {
      console.log(err);
      return { data: err, error: true };
    });
};
