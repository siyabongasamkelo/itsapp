import styled from "styled-components";
import profilepic from "../img/propic5.jpg";
import { Button, Stack } from "react-bootstrap";
import { Bell, PlusCircle, DoorClosed } from "react-bootstrap-icons";

const UserImg = styled.img.attrs({ src: `${profilepic}` })`
  width: 65px;
  height: 65px;
  border-radius: 10px;
  margin-left: 30px;
`;

const LoggedInUserCard = styled.div`
  height: 50%;
  width: 30%;
`;

const UserCardAction = styled.div`
  height: 50%;
  width: 70%;
`;

const UserName = styled.h3`
  color: ${(props) => props.theme.light.text};
  padding-left: 10px;
  font-size: ${(props) => props.theme.size.large};
  font-weight: 700;
`;

const ChatName = styled.h3`
  color: ${(props) => props.theme.light.text};
  font-size: ${(props) => props.theme.size.medium};
`;

const LastSeen = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
`;

const UserHeadrCard = () => {
  return (
    <Stack direction="horizontal" style={{ height: "20vh" }}>
      <LoggedInUserCard>
        <Stack direction="horizontal">
          <Stack direction="horizontal">
            <UserImg />
            <UserName>Siya Samkelo</UserName>
          </Stack>
          <Stack direction="horizontal">
            <Bell style={{ transform: "scale(160%)", marginLeft: "40px" }} />
            <PlusCircle
              style={{ transform: "scale(150%)", marginLeft: "30px" }}
            />
          </Stack>
        </Stack>
      </LoggedInUserCard>
      <UserCardAction>
        <Stack direction="horizontal">
          <Stack>
            <ChatName>Mavara</ChatName>
            <LastSeen>Last seen 2 hours ago</LastSeen>
          </Stack>

          <Button style={{ marginRight: "40px" }}>
            log out
            <DoorClosed style={{ marginLeft: "10px" }} />
          </Button>
        </Stack>
      </UserCardAction>
    </Stack>
  );
};

export default UserHeadrCard;
