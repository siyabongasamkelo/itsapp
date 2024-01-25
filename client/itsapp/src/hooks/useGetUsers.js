import { baseUrl, getRequest } from "../utils/Services";

export const getUsers = () => {
  try {
    const user = getRequest(`${baseUrl}/user`);
    return user;
  } catch (err) {
    console.log(err);
  }
};
