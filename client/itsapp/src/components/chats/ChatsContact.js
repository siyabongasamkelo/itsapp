import styled from "styled-components";
import { Stack } from "react-bootstrap";
import { TextBox } from "../TextBox";
import { Chat, PersonAdd } from "react-bootstrap-icons";
import { ChatCartegory } from "./ChartCartegory.styled";
import ChatCard from "./ChatCard";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const ChatsContactStyles = styled.div`
  width: 30%;
  height: 70vh;
`;

const ChatsContact = () => {
  const { chats } = useContext(ChatContext);
  return (
    <ChatsContactStyles>
      <Stack direction="vertical">
        <div>
          <TextBox type="text" placeholder="Search" />
        </div>
        <Stack direction="horizontal">
          <ChatCartegory>
            <Chat />
          </ChatCartegory>
          <ChatCartegory style={{ marginLeft: "10px" }}>
            <PersonAdd />
          </ChatCartegory>
        </Stack>
        {/* This is where we display all the Contacts of our users... */}
        <Stack direction="vertical">
          {chats &&
            chats.map((chat, i) => {
              return <ChatCard key={i} chat={chat} />;
            })}
        </Stack>
      </Stack>
    </ChatsContactStyles>
  );
};

export default ChatsContact;
