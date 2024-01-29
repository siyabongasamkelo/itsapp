import { useContext } from "react";
import { Stack } from "react-bootstrap";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { baseUrl } from "../../utils/Services";
import axios from "axios";
import {
  Chatstyles,
  ChatstylesCover,
  MessageDate,
  UserImg,
  Username,
} from "./ChatCardStyles.styled";

const ShortMessage = styled(MessageDate)``;

const ChatCard = ({ chat }) => {
  const { user } = useContext(AuthContext);
  const { setRoomMessages, joinRoom, updateCurrentMessage } =
    useContext(ChatContext);

  return (
    <Chatstyles
      onClick={async () => {
        const chatRoom = await axios.post(`${baseUrl}/chats/get`, {
          creater: user?.data?._id,
          joiner: chat?._id,
        });

        joinRoom(chatRoom?.data?._id);

        const roomMessages = await axios.get(
          `${baseUrl}/messages/get/${chatRoom?.data?._id}`
        );
        setRoomMessages(roomMessages?.data);

        updateCurrentMessage({
          author: user?.data?._id,
          reciever: roomMessages?.data[0].reciever,
          text: "",
          chatRoom: chatRoom?.data?._id,
        });
      }}
    >
      <ChatstylesCover>
        <Stack direction="horizontal">
          <UserImg>
            <img src={chat.image} alt="profile pictures" />
          </UserImg>
          <Stack direction="vertical" style={{ marginLeft: "10px" }}>
            <Stack
              direction="horizontal"
              style={{ width: "90%" }}
              className=" justify-content-between "
            >
              <Username>{chat.username}</Username>
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
