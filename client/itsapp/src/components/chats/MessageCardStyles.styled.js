import styled from "styled-components";

export const ProfilePic = styled.div`
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
`;

export const MessageCardStyles = styled.div`
  width: 100%;
  margin-top: 25px;
  cursor: pointer;
`;

export const MessageCardStylesCover = styled.div`
  width: 60%;
`;

export const Time = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
  margin-top: 5px;
`;

export const MessageCover = styled.div`
  border-radius: 20px;
  max-width: 80%;
  padding: 10px 30px 10px 20px;
  background-color: ${(props) =>
    props.isCurrentUser ? "rgba(0,0,0,0.3)" : "#0d6efd"};
  color: white;
`;

export const CurrentUserMessageCover = styled.div`
  border-radius: 20px;
  padding: 10px;
  background-color: ${(props) =>
    props.isCurrentUser ? "rgba(0,0,0,0.3)" : "#0d6efd"};
  color: white;
`;
