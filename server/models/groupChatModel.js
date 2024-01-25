const mongoose = require("mongoose");

const groupChatSchema = new mongoose.Schema(
  {
    creater: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
    },
    users: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const groupChatModel = mongoose.model("groupChat", groupChatSchema);

module.exports = groupChatModel;
