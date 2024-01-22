import styled from "styled-components";
import { Stack } from "react-bootstrap";
import { TextBox } from "../TextBox";
import { Chat, PersonAdd } from "react-bootstrap-icons";
import { ChatCartegory } from "./ChartCartegory.styled";
import ChatCard from "./ChatCard";

const ChatsContactStyles = styled.div`
  width: 30%;
`;

const ChatsContact = () => {
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
        <Stack>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </Stack>
      </Stack>
    </ChatsContactStyles>
  );
};

export default ChatsContact;
