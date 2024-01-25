import styled from "styled-components";

export const FormStyles = styled.div`
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

export const FormHeader = styled.h3`
  font-size: ${(props) => props.theme.size.extraLarge};
  color: ${(props) => props.theme.light.text};
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
`;
