const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/messageControllers");

router.post("/create", messageControllers.createMessage);
router.get("/get", messageControllers.getMessages);

module.exports = router;
