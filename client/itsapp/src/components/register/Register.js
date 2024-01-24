import { Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import { TextBox } from "../TextBox";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { baseUrl } from "../../utils/Services";

export const LoginStyles = styled.div`
  height: 80%;
  width: 100%;
  margin-top: 5%;
`;

export const Form = styled.form`
  height: 550px;
  width: 380px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.light.smallText};
`;

export const TextBoxs = styled(TextBox)`
  margin: 0;
  margin-top: 20px;
`;

const Register = () => {
  const [userRegisterInfo, setUserRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    image: null,
  });

  console.log(userRegisterInfo);

  const registerUser = () => {
    const formData = new FormData();
    formData.append("image", userRegisterInfo.image);
    formData.append("username", userRegisterInfo.username);
    formData.append("email", userRegisterInfo.email);
    formData.append("password", userRegisterInfo.password);

    axios
      .post(`${baseUrl}/user/register`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginStyles>
      <div className=" d-flex justify-content-center ">
        <Form>
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
              Login
            </Button>
          </div>
        </Form>
      </div>
    </LoginStyles>
  );
};

export default Register;
