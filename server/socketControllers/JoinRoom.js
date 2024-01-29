module.exports = (io, socket) => {
  socket.on("join-room", (chatRoom) => {
    socket.join(chatRoom);
    console.log(`User with ID: ${socket.id} joined room: ${chatRoom}`);
  });
};

// socket.on("join-room", async (chatRoom) => {
//     socket.join(chatRoom);
//     console.log(`User with ID: ${socket.id} joined room: ${chatRoom}`);
//   });
