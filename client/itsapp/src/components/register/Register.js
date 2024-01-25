import { Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import { TextBox } from "../TextBox";
import { useState } from "react";
import { baseUrl, postRequest } from "../../utils/Services";
import { Form, FormHeader, FormStyles, Label } from "../FormStyles.styled";

export const TextBoxs = styled(TextBox)`
  margin: 0;
  margin-top: 10px;
`;

const Register = () => {
  const [isUserRegisterLoading, setIsUserRegisterLoading] = useState(false);
  const [userRegisterError, setUserRegisterError] = useState(null);
  const [userRegisterInfo, setUserRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    image: null,
  });

  const registerUser = async () => {
    //i do these bcz it's the only way i know to send files to the server
    //if anyone knows a better cleaner way plz let know
    const formData = new FormData();
    formData.append("image", userRegisterInfo.image);
    formData.append("username", userRegisterInfo.username);
    formData.append("email", userRegisterInfo.email);
    formData.append("password", userRegisterInfo.password);
    setIsUserRegisterLoading(true);
    setUserRegisterError(null);
    try {
      const response = await postRequest(`${baseUrl}/user/register`, formData);

      setIsUserRegisterLoading(false);
      if (response.error)
        return setUserRegisterError(response.data.response.data);

      localStorage.setItem("User", JSON.stringify(response));
    } catch (err) {
      console.log(err);
      setIsUserRegisterLoading(false);
    }
  };

  return (
    <FormStyles>
      <div className=" d-flex justify-content-center ">
        <Form>
          <FormHeader>Register</FormHeader>
          <div>
            <Label>Username : </Label>

            <TextBoxs
              type="text"
              onChange={(e) => {
                setUserRegisterInfo({
                  ...userRegisterInfo,
                  username: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <Label>Email : </Label>

            <TextBoxs
              type="email"
              onChange={(e) => {
                setUserRegisterInfo({
                  ...userRegisterInfo,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <Label>Password :</Label>

            <TextBoxs
              type="password"
              onChange={(e) => {
                setUserRegisterInfo({
                  ...userRegisterInfo,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <Label>Prifile Picture : </Label>

            <TextBoxs
              type="file"
              onChange={(e) => {
                setUserRegisterInfo({
                  ...userRegisterInfo,
                  image: e.target.files[0],
                });
              }}
            />
          </div>
          <div>
            <Button
              className=" mt-4 "
              style={{ width: "90%" }}
              onClick={registerUser}
            >
              {isUserRegisterLoading ? "Registering..." : "Register"}
            </Button>
          </div>
          <div>
            {userRegisterError && (
              <Alert
                variant="danger"
                style={{ width: "90%", marginTop: "20px" }}
              >
                {userRegisterError}
              </Alert>
            )}
          </div>
        </Form>
      </div>
    </FormStyles>
  );
};

export default Register;
