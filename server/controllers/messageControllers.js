const messages = require("../models/messagesModel");

const createMessage = async (req, res) => {
  try {
    const { author, reciever, text, chatRoom } = req.body;

    if (!author || !reciever || !text || !chatRoom)
      return res
        .status(400)
        .json("author, reciever, text & chatRoom are required");

    const message = new messages({ author, reciever, text, chatRoom });
    await message.save();

    res.status(200).json("message created successfully");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error });
  }
};

const getMessages = async (req, res) => {
  try {
    const { chatRoom } = req.params;

    if (!chatRoom) return res.status(400).json(" chatRoom is required");

    const textMessages = await messages.find({ chatRoom: chatRoom });

    res.status(200).json(textMessages);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

module.exports = { createMessage, getMessages };
