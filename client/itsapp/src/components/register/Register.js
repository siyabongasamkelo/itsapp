import { Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import { TextBox } from "../TextBox";
import { useState } from "react";
import { baseUrl, postRequest } from "../../utils/Services";

export const FormHeader = styled.h3`
  font-size: ${(props) => props.theme.size.extraLarge};
  color: ${(props) => props.theme.light.text};
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
`;

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

      //if theres an error
      if (response.error) {
        setIsUserRegisterLoading(false);
        setUserRegisterError(response.data.response.data);
      }
    } catch (err) {
      console.log(err);
      setIsUserRegisterLoading(false);
    }
  };

  return (
    <LoginStyles>
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
            {userRegisterError ? (
              <Alert
                variant="danger"
                style={{ width: "90%", marginTop: "20px" }}
              >
                {userRegisterError}
              </Alert>
            ) : (
              ""
            )}
          </div>
        </Form>
      </div>
    </LoginStyles>
  );
};

export default Register;
