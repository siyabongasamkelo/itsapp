import { useState, useEffect, useCallback, createContext } from "react";
import { baseUrl, postRequest } from "../utils/Services";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    image: null,
    email: "",
    password: "",
  });

  console.log("registerInfo", registerInfo);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsRegisterLoading(true);
      setRegisterError(null);

      const formData = new FormData();
      formData.append("image", registerInfo.image);
      formData.append("username", registerInfo.username);
      formData.append("email", registerInfo.email);
      formData.append("password", registerInfo.password);

      //   const response = await postRequest(
      //     `${baseUrl}/user/register`,
      //     // JSON.stringify(formData)
      //     formData
      //   );
      let response;
      axios
        .post(`${baseUrl}/user/register`, registerInfo)
        .then((res) => {
          console.log(res);
          response = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      setIsRegisterLoading(false);
      if (response?.error) {
        return setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        updateRegisterInfo,
        registerUser,
        registerInfo,
        registerError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
