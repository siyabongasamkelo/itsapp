const mongoose = require("mongoose");

const chatRoomSchema = new mongoose.Schema(
  {
    creater: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
    },
    joiner: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
    },
  },
  {
    timestamps: true,
  }
);

const chatRoomModel = mongoose.model("ChatRoom", chatRoomSchema);

module.exports = chatRoomModel;
