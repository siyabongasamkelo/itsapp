import { useState, useEffect, createContext, useCallback } from "react";
import { getMessages } from "../hooks/useGetMessages";

export const ChatContext = createContext();

export const MessageContextProvider = ({ children }) => {
  const [RoomMessages, setRoomMessages] = useState([]);
  console.log(RoomMessages);

  const getChatMessages = useCallback(async () => {
    try {
      const messages = await getMessages();
      setRoomMessages(messages.data);
      return RoomMessages;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ChatContext.Provider value={{ getChatMessages, RoomMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
