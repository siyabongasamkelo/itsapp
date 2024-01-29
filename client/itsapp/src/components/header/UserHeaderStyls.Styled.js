import styled from "styled-components";

export const ProfilePic = styled.div`
  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
`;

export const LoggedInUserCard = styled.div`
  width: 30%;
`;

export const UserCardAction = styled.div`
  width: 70%;
`;

export const UserName = styled.h3`
  color: ${(props) => props.theme.light.text};
  padding-left: 10px;
  font-size: ${(props) => props.theme.size.large};
  font-weight: 700;
`;

export const ChatName = styled.h3`
  color: ${(props) => props.theme.light.text};
  font-size: ${(props) => props.theme.size.medium};
`;

export const LastSeen = styled.p`
  color: ${(props) => props.theme.light.smallText};
  font-size: ${(props) => props.theme.size.small};
`;
