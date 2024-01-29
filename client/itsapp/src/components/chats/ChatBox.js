import MesageCard from "./MesageCard";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { Button, Stack } from "react-bootstrap";
import { Send } from "react-bootstrap-icons";
import { TextBox } from "../TextBox";
import {
  ChatBoxStyles,
  FirstMessageDate,
  MessageCover,
} from "./ChatBoxStyles.styled";

const ChatBox = () => {
  const { RoomMessages, sendMessage, updateCurrentMessage, currentMessages } =
    useContext(ChatContext);
  const { user } = useContext(AuthContext);

  return (
    <ChatBoxStyles>
      <MessageCover>
        <div>
          <FirstMessageDate>Yesterday</FirstMessageDate>
        </div>
        <div>
          {RoomMessages ? (
            RoomMessages?.map((message, index) => (
              <MesageCard
                key={index}
                message={message?.text}
                isCurrentUser={user?.data?._id === message.author}
              />
            ))
          ) : (
            <p>There are no messages on this chat...</p>
          )}
        </div>
      </MessageCover>
      <Stack direction="horizontal">
        <TextBox
          onChange={(e) => {
            updateCurrentMessage({ ...currentMessages, text: e.target.value });
          }}
          value={currentMessages?.text}
        />
        <Button
          className=" rounded-5 "
          onClick={() => {
            sendMessage();
          }}
        >
          <Send style={{ transform: "scale(200%)" }} />
        </Button>
      </Stack>
    </ChatBoxStyles>
  );
};

export default ChatBox;
