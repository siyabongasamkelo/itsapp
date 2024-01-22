import { Stack } from "react-bootstrap";
import styled from "styled-components";
import profilepic from "../img/propic5.jpg";

const Chatstyles = styled.div`
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

const ChatstylesCover = styled.div`
  height: 80%;
  width: 90%;
`;

const UserImg = styled.img.attrs({ src: `${profilepic}` })`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const Username = styled.h3`
  color: ${(props) => props.theme.light.text};
  font-size: ${(props) => props.theme.size.medium};
  transition: 0.5s ease-in-out;
`;

const MessageDate = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
  transition: 0.5s ease-in-out;
`;

const ShortMessage = styled(MessageDate)``;

const ChatCard = () => {
  return (
    <Chatstyles>
      <ChatstylesCover>
        <Stack direction="horizontal">
          <UserImg />
          <Stack direction="vertical" style={{ marginLeft: "10px" }}>
            <Stack
              direction="horizontal"
              style={{ width: "90%" }}
              className=" justify-content-between "
            >
              <Username>Siya Samkelo</Username>
              <MessageDate>Thursday</MessageDate>
            </Stack>
            <ShortMessage>Voice mesasge</ShortMessage>
          </Stack>
        </Stack>
      </ChatstylesCover>
    </Chatstyles>
  );
};

export default ChatCard;
