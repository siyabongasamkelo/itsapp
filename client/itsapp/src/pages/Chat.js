import { ChatsStyles } from "../components/chats/Chats.styled";
import { Stack } from "react-bootstrap";
import ChatsContact from "../components/chats/ChatsContact";
import ChatBox from "../components/chats/ChatBox";

const Chat = () => {
  return (
    <ChatsStyles>
      <Stack direction="horizontal">
        <ChatsContact />
        <ChatBox />
      </Stack>
    </ChatsStyles>
  );
};

export default Chat;
