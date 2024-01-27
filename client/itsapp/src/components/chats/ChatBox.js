import styled from "styled-components";
import MesageCard from "./MesageCard";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
// import InputEmoji from "react-input-emoji";
import { Button, Stack } from "react-bootstrap";
import { Send } from "react-bootstrap-icons";
import { TextBox } from "../TextBox";

export const ChatBoxStyles = styled.div`
  height: 70vh;
  width: 70%;
  /* overflow-y: scroll; */
`;
export const MessageCover = styled.div`
  height: 80%;
  margin-bottom: 30px;
  overflow-y: scroll;
`;

const FirstMessageDate = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
  text-align: center;
  margin-top: 60px;
`;

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
          <MesageCard
            message={
              "this is a message im using to test how it'll work with thechat...."
            }
            isCurrentUser={true}
          />
          {RoomMessages ? (
            RoomMessages?.map((message, index) => (
              <MesageCard
                key={index}
                message={message?.text}
                isCurrentUser={!user._id === message.author}
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
