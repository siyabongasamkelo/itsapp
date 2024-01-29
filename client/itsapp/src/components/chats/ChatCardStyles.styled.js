import styled from "styled-components";

export const Chatstyles = styled.div`
  width: 90%;
  margin-top: 20px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.light.primary};
    h3,
    p {
      color: white;
    }
  }
`;

export const ChatstylesCover = styled.div`
  height: 80%;
  width: 90%;
`;

export const UserImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
`;

export const Username = styled.h3`
  color: ${(props) => props.theme.light.text};
  font-size: ${(props) => props.theme.size.medium};
  transition: 0.5s ease-in-out;
`;

export const MessageDate = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
  transition: 0.5s ease-in-out;
`;
