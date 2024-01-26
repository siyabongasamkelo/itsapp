const messages = require("../models/messagesModel");

const createMessage = async (req, res) => {
  try {
    const { author, reciever, text, groupChat } = req.body;

    if (!author || !reciever || !text || !groupChat)
      return res
        .status(400)
        .json("author, reciever, text & groupChat are required");

    const message = new messages({ author, reciever, text, groupChat });
    await message.save();

    res.status(200).json("message created successfully");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error });
  }
};

const getMessages = async (req, res) => {
  try {
    const { groupChatId } = req.params;

    if (!groupChatId) return res.status(400).json(" groupChat is required");

    const messages = messages.find({ groupChat: groupChatId });

    res.status(200).json("message created successfully");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error });
  }
};

module.exports = { createMessage, getMessages };
