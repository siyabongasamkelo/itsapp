const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.post("/create", chatController.createChatRoom);
router.post("/get", chatController.getChatRooms);

module.exports = router;
