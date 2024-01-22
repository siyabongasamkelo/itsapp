import styled from "styled-components";

export const TextBox = styled.input`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  margin-top: 50px;
  border: 1px solid ${(props) => props.theme.light.primary};
  padding: 20px;
`;
