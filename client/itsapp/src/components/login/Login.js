import { Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import { TextBox } from "../TextBox";
import { useState } from "react";
import { baseUrl, postRequest } from "../../utils/Services";
import { Form, FormHeader, FormStyles, Label } from "../FormStyles.styled";

export const TextBoxs = styled(TextBox)`
  margin: 0;
  margin-top: 20px;
`;

const Login = () => {
  const [isUserloginLoading, setIsUserLoginLoading] = useState(false);
  const [userLoginError, setUserLoginError] = useState(null);
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    setIsUserLoginLoading(true);
    setUserLoginError(null);
    try {
      const response = await postRequest(`${baseUrl}/user/login`, {
        email: userLoginInfo.email,
        password: userLoginInfo.password,
      });

      setIsUserLoginLoading(false);
      if (response.error) return setUserLoginError(response.data.response.data);

      localStorage.setItem("User", JSON.stringify(response.data));
    } catch (err) {
      setIsUserLoginLoading(false);
    }
  };

  return (
    <FormStyles>
      <div className=" d-flex justify-content-center ">
        <Form>
          <FormHeader>Login</FormHeader>
          <div>
            <Label>Email : </Label>

            <TextBoxs
              type="email"
              onChange={(e) =>
                setUserLoginInfo({ ...userLoginInfo, email: e.target.value })
              }
            />
          </div>
          <div>
            <Label>Password :</Label>

            <TextBoxs
              type="password"
              onChange={(e) =>
                setUserLoginInfo({ ...userLoginInfo, password: e.target.value })
              }
            />
          </div>
          <div>
            <Button
              className=" mt-4 "
              style={{ width: "90%" }}
              onClick={loginUser}
            >
              {isUserloginLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
          <div>
            {userLoginError && (
              <Alert
                style={{ width: "90%", marginTop: "20px" }}
                variant="danger"
              >
                {userLoginError}
              </Alert>
            )}
          </div>
        </Form>
      </div>
    </FormStyles>
  );
};

export default Login;
