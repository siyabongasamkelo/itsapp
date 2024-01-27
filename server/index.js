const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const authRouter = require("./routes/authRoutes");
const chatRouter = require("./routes/chatRoutes");
const messageRouter = require("./routes/messageRoutes");
const { Server } = require("socket.io");
const messages = require("./models/messagesModel");

const app = express();
//setting up socketIo
const server = require("http").createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    // origin: ["https://siya-shoeshop.netlify.app"],
  },
});

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(fileupload({ useTempFiles: true }));

app.use("/user", authRouter);
app.use("/chats", chatRouter);
app.use("/messages", messageRouter);

const uri = process.env.MONGO_URL;

//mongodb connection
mongoose
  .connect(uri, {})
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

io.on("connection", (socket) => {
  console.log(`user ${socket.id} joined`);

  socket.on("join-room", async (chatRoom) => {
    socket.join(chatRoom);
    console.log(`User with ID: ${socket.id} joined room: ${chatRoom}`);
  });

  socket.on("send-message", async (message) => {
    const newMessage = new messages(message);
    await newMessage.save();

    const chatRoom = message.chatRoom;

    io.to(chatRoom).emit("get-live-message", message);
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnencted: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
