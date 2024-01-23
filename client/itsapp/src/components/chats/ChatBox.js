import styled from "styled-components";
import MesageCard from "./MesageCard";
export const ChatBoxStyles = styled.div`
  height: 70vh;
  width: 70%;
  /* overflow-y: scroll; */
`;

const FirstMessageDate = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
  text-align: center;
  margin-top: 60px;
`;

const ChatBox = () => {
  return (
    <ChatBoxStyles>
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
        <MesageCard
          message={
            "this is a message im d f d dfdddfd fdfdfddf dfdfd dfdff fdf dffd fd f  ffdfd     asdasdsa   asdsadsadas   df dfdusing to test how it'll work with thechat...."
          }
          isCurrentUser={true}
        />
        <MesageCard
          message={
            "this is a message im using to test how it'll work with thechat...."
          }
          isCurrentUser={false}
        />
      </div>
    </ChatBoxStyles>
  );
};

export default ChatBox;
