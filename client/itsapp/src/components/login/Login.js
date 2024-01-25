import { Button } from "react-bootstrap";
import styled from "styled-components";
import { TextBox } from "../TextBox";

export const LoginStyles = styled.div`
  height: 80%;
  width: 100%;
  margin-top: 5%;
`;

export const FormHeader = styled.h3`
  font-size: ${(props) => props.theme.size.extraLarge};
  color: ${(props) => props.theme.light.text};
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
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

const Login = () => {
  return (
    <LoginStyles>
      <div className=" d-flex justify-content-center ">
        <Form>
          <FormHeader>Login</FormHeader>
          <div>
            <Label>Email : </Label>

            <TextBoxs />
          </div>
          <div>
            <Label>Password :</Label>

            <TextBoxs />
          </div>
          <div>
            <Button className=" mt-4 " style={{ width: "90%" }}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </LoginStyles>
  );
};

export default Login;
