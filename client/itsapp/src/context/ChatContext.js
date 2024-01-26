import { useState, useEffect, createContext, useCallback } from "react";
import { io } from "socket.io-client";
import { baseUrl, postRequest } from "../utils/Services";
import { getUsers } from "../hooks/useGetUsers";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);

  console.log(chats);

  //connecting socket io
  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  // getting all chats
  useEffect(() => {
    const getAllChats = async () => {
      const getChats = await getUsers();
      setChats(getChats?.data?.data);
    };
    getAllChats();
  }, [user]);

  const createChatRoom = useCallback(async (creater, joiner) => {
    if (!creater || joiner) return;
    try {
      const chatRoom = postRequest(`${baseUrl}/chat/create`, {
        creater,
        joiner,
      });
      return chatRoom;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ChatContext.Provider value={{ createChatRoom, chats }}>
      {children}
    </ChatContext.Provider>
  );
};
