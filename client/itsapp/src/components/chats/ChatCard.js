import { useContext } from "react";
import { Stack } from "react-bootstrap";
import styled from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { baseUrl } from "../../utils/Services";
import axios from "axios";

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

const UserImg = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
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

const ChatCard = ({ chat }) => {
  const { user } = useContext(AuthContext);
  const {
    createChatRoom,
    getChatMessages,
    setRoomMessages,
    findChatRoom,
    joinRoom,
  } = useContext(ChatContext);

  const findOrCreateChat = async (creater, joiner) => {
    const room = await findChatRoom(creater, joiner);
    if (!room) {
      console.log("room not found");
      const room = await createChatRoom(creater, joiner);
      return room;
    }
    return room;
  };
  // console.log(user.data._id);
  // console.log(chat._id);

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

        // console.log(chatRoom?.data?._id);
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
