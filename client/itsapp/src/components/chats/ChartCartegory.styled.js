import styled from "styled-components";

export const ChatCartegory = styled.div`
  height: 50px;
  width: 60px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.light.primary};
    svg {
      fill: white;
    }
  }
  svg {
    transform: scale(170%);
  }
`;
