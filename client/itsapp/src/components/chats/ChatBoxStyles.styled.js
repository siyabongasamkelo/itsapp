import styled from "styled-components";

export const ChatBoxStyles = styled.div`
  height: 70vh;
  width: 70%;
`;
export const MessageCover = styled.div`
  height: 80%;
  margin-bottom: 30px;
  overflow-y: scroll;
`;

export const FirstMessageDate = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
  text-align: center;
  margin-top: 60px;
`;
