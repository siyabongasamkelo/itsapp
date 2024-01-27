import { useState, useEffect, createContext, useCallback } from "react";
import { io } from "socket.io-client";
import { baseUrl, postRequest } from "../utils/Services";
import { getUsers } from "../hooks/useGetUsers";
import { getMessages } from "../hooks/useGetMessages";
import axios from "axios";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [socket, setSocket] = useState(null);
  const [chats, setChats] = useState([]);
  const [room, setRoom] = useState(null);
  const [RoomMessages, setRoomMessages] = useState([]);

  console.log("messages", RoomMessages);

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

  //getting live messages from socket
  useEffect(() => {
    if (socket === null) return;
    socket.on("get-live-message", (newMessage) => {
      setRoomMessages((messages) => [...messages, newMessage]);
    });
  }, [socket]);

  //   join chatRoom
  //   this function will be executed when you click the chatCard components automatically
  const joinRoom = (room) => {
    if (socket === null) return;
    if (!room) return;
    try {
      console.log("joining room");
      socket.emit("join-room", room);
    } catch (err) {
      console.log(err);
    }
  };

  //send live message
  const sendMessage = async (message) => {
    if (socket === null) return;
    if (!message) return;
    try {
      await socket.emit("send-message", message);
    } catch (err) {
      console.log(err);
    }
  };

  //creating a chat room
  //this occurs when user clicks any of the chatcard
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

  //returns messages within a chat room
  const getChatMessages = useCallback(async (chatRoomId) => {
    try {
      const messages = await getMessages(chatRoomId);
      setRoomMessages(messages.data);
      return RoomMessages;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        createChatRoom,
        chats,
        getChatMessages,
        room,
        setRoom,
        RoomMessages,
        setRoomMessages,
        sendMessage,
        joinRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
