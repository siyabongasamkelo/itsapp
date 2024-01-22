import { ChatsStyles } from "../components/chats/Chats.styled";
import { Stack } from "react-bootstrap";
import ChatsContact from "../components/chats/ChatsContact";

const Chat = () => {
  return (
    <ChatsStyles>
      <Stack direction="horizontal">
        <ChatsContact />
      </Stack>
    </ChatsStyles>
  );
};

export default Chat;
