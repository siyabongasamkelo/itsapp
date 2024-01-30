import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { baseUrl, getRequest } from "../utils/Services";

export const useGetLastMessage = (chatRoom) => {
  const { RoomMessages } = useContext(ChatContext);
  const [latestMessage, setLatestMessage] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      const response = await getRequest(
        `${baseUrl}/messages/get/${chatRoom?.data?._id}`
      );

      if (response.error) {
        return console.log("Error getting messages", response);
      }

      const lastMesasge = response[response?.length - 1];
      setLatestMessage(lastMesasge);
    };
    getMessages();
  }, [RoomMessages]);
  return { latestMessage };
};
