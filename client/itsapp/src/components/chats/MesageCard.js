import styled from "styled-components";
import profilepic from "../img/propic5.jpg";
import { Stack } from "react-bootstrap";
import moment from "moment";
import {
  CurrentUserMessageCover,
  MessageCardStyles,
  MessageCardStylesCover,
  MessageCover,
  ProfilePic,
  Time,
} from "./MessageCardStyles.styled";

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

              <Time>{moment(message?.createdAt).calendar()}</Time>
            </div>
          </div>
        ) : (
          <Stack direction="horizontal">
            <div>
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
