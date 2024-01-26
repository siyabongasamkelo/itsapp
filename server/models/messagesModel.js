const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
      minlength: 3,
      maxlength: 40,
    },
    reciever: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
      minlength: 3,
      maxlength: 40,
    },
    text: {
      type: String,
      require: true,
    },
    groupChat: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "groupChat",
    },
  },
  {
    timestamps: true,
  }
);

const messagesModel = mongoose.model("messages", messagesSchema);

module.exports = messagesModel;
