const messages = require("../models/messagesModel");

module.exports = async (io, socket) => {
  socket.on("send-message", async (message) => {
    const newMessage = new messages(message);
    await newMessage.save();

    const chatRoom = message.chatRoom;

    io.to(chatRoom).emit("get-live-message", message);
  });
};
