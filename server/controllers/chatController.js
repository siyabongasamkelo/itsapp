const chatRoomModel = require("../models/chatRoomModel");

const createChatRoom = async (req, res) => {
  try {
    const { creater, joiner } = req.body;

    if (!creater || !joiner)
      return res.status(400).json("creater & joiner are required");

    const createChatRoom = new chatRoomModel({ creater, joiner });
    await createChatRoom.save();

    const chatRoom = await chatRoomModel
      .findOne()
      .where("creater")
      .in([creater, joiner])
      .where("joiner")
      .in([creater, joiner]);

    res.status(200).json(chatRoom);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error });
  }
};

const getChatRooms = async (req, res) => {
  const { creater, joiner } = req.body;

  if (!creater || !joiner)
    return res.status(400).json("creater & joiner are required");
  try {
    const chatRoom = await chatRoomModel
      .findOne()
      .where("creater")
      .in([creater, joiner])
      .where("joiner")
      .in([creater, joiner]);
    res.status(200).json(chatRoom);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error });
  }
};

module.exports = { createChatRoom, getChatRooms };
