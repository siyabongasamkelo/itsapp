const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (_id) => {
  const jwtKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtKey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const image = req.files;
    //
    console.log(req);
    res.json("working");

    // let user = await userModel.findOne({ email });

    // if (user) return res.status(400).json("User already exists");

    // if (!username || !email || !password || !image)
    //   return res.status(400).json("All fields are required");

    // if (!validator.isEmail(email)) return res.status(400).json("Invalid email");

    // if (!validator.isStrongPassword(password))
    //   return res.status(400).json("Password not strong enough");

    // //uploading image file to cloudinary
    // const uploadImage = await cloudinary.uploader
    //   .upload(image.file.tempFilePath)
    //   .catch((err) => {
    //     res.status(400).json("an error occured while uploading your photo");
    //     console.log(err);
    //     return;
    //   });

    // let imageUrl = uploadImage.secure_url;

    // user = new userModel({ username, email, password, image: imageUrl });

    // const salt = await bcrypt.genSalt();
    // user.password = await bcrypt.hash(user.password, salt);

    // await user.save();

    // const token = createToken(user._id);

    // res.status(200).json({ _id: user._id, name, email, token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json("Invalid email or password");

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return res.status(400).json("Invalid email or password");

    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, name: user.name, email, token });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const findUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { registerUser, loginUser };
