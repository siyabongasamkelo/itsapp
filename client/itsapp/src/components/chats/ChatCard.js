import { useContext, useState } from "react";
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
import moment from "moment";

const ShortMessage = styled(MessageDate)``;

const ChatCard = ({ chat }) => {
  const { user } = useContext(AuthContext);
  const { setRoomMessages, joinRoom, updateCurrentMessage } =
    useContext(ChatContext);
  const [latestMessage, setLatestMessage] = useState([]);
  const [shortMessages, setShortMessages] = useState("");

  return (
    <Chatstyles
      onClick={async () => {
        let chatRoom = await axios.post(`${baseUrl}/chats/get`, {
          creater: user?.data?._id,
          joiner: chat?._id,
        });

        // if chatRoom doesn't exist
        if (!chatRoom?.data)
          chatRoom = await axios.post(`${baseUrl}/chats/create`, {
            creater: user?.data?._id,
            joiner: chat?._id,
          });

        await joinRoom(chatRoom?.data?._id);

        const roomMessages = await axios.get(
          `${baseUrl}/messages/get/${chatRoom?.data?._id}`
        );

        setRoomMessages(roomMessages?.data);

        updateCurrentMessage({
          author: user?.data?._id,
          reciever: chat?._id,
          text: "",
          chatRoom: chatRoom?.data?._id,
        });

        //getting the last message so that i can display it on the ChatCard...

        const lastMessage = roomMessages?.data[roomMessages?.data?.length - 1];
        setLatestMessage(lastMessage);

        const lasteShortMessages = `${latestMessage?.text?.slice(0, 5)}...  `;
        setShortMessages(lasteShortMessages);
        // console.log(shortMessage);
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
              <MessageDate>
                {moment(latestMessage?.createdAt).calendar()}
              </MessageDate>
            </Stack>
            <ShortMessage>{shortMessages}</ShortMessage>
          </Stack>
        </Stack>
      </ChatstylesCover>
    </Chatstyles>
  );
};

export default ChatCard;
