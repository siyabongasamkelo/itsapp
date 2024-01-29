import { Button, Stack } from "react-bootstrap";
import { Bell, PlusCircle, DoorClosed } from "react-bootstrap-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  ChatName,
  LastSeen,
  LoggedInUserCard,
  ProfilePic,
  UserCardAction,
  UserName,
} from "./UserHeaderStyls.Styled";

const UserHeadrCard = () => {
  const { user } = useContext(AuthContext);
  return (
    <Stack direction="horizontal">
      <LoggedInUserCard>
        <Stack direction="horizontal">
          <Stack direction="horizontal">
            <ProfilePic>
              <img src={user?.data?.image} alt="profile" />
            </ProfilePic>
            <UserName>{user?.data?.username}</UserName>
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

          <Button>
            log out
            <DoorClosed style={{ marginLeft: "10px" }} />
          </Button>
        </Stack>
      </UserCardAction>
    </Stack>
  );
};

export default UserHeadrCard;
