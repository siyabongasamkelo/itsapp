import styled from "styled-components";
import profilepic from "../img/propic5.jpg";
import { Stack } from "react-bootstrap";

export const ProfilePic = styled.div`
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
`;

export const MessageCardStyles = styled.div`
  width: 100%;
  margin-top: 25px;
  cursor: pointer;
`;

export const MessageCardStylesCover = styled.div`
  width: 60%;
`;

const Time = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
  margin-top: 5px;
`;

const MessageCover = styled.div`
  border-radius: 20px;
  max-width: 80%;
  padding: 10px 30px 10px 20px;
  background-color: ${(props) =>
    props.isCurrentUser ? "rgba(0,0,0,0.3)" : "#0d6efd"};
  color: white;
`;

const CurrentUserMessageCover = styled.div`
  border-radius: 20px;
  padding: 10px;
  background-color: ${(props) =>
    props.isCurrentUser ? "rgba(0,0,0,0.3)" : "#0d6efd"};
  color: white;
`;

const Name = styled(Time)`
  margin-top: 0;
`;

const MesageCard = ({ message, isCurrentUser }) => {
  return (
    <MessageCardStyles
      className={isCurrentUser ? "d-flex justify-content-end " : ""}
    >
      <MessageCardStylesCover>
        {isCurrentUser ? (
          <div
            style={{ marginTop: "20px" }}
            className=" d-flex justify-content-end"
          >
            <div>
              <CurrentUserMessageCover
                isCurrentUser={true}
                style={{ width: "100% " }}
              >
                {message}
              </CurrentUserMessageCover>
              <Time>5:11 PM</Time>
            </div>
          </div>
        ) : (
          <Stack direction="horizontal">
            <div>
              {/* <UserImg /> */}
              <ProfilePic>
                <img src={profilepic} alt="profile" />
              </ProfilePic>
              <Time>5:11 PM</Time>
            </div>
            <div style={{ marginLeft: "15px" }}>
              <Name>Siya Samkelo</Name>
              <MessageCover isCurrentUser={false}>{message}</MessageCover>
            </div>
          </Stack>
        )}
      </MessageCardStylesCover>
    </MessageCardStyles>
  );
};

export default MesageCard;
