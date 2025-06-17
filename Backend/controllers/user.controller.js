import { User } from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { username, fullname, password, conformpassword, gender } = req.body;
    if (!username || !fullname || !password || !conformpassword || !gender) {
      return res.status(400).json({ message: "All fields must be requires" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "user is already exist" });
    }

    const hashPassowrd = await bcrypt.hash(password, 10);

    const boyAvater = `https://avatar.iran.liara.run/public/boy?${username}`;
    const girlAvater = `https://avatar.iran.liara.run/public/girl?${username}`;

    const newUser = await User.create({
      username,
      fullname,
      password: hashPassowrd,
      gender,
      profilePic: gender === "male" ? boyAvater : girlAvater,
    });

    return res
      .status(200)
      .json({ success: true, message: "Successfully created the account" });
  } catch (error) {
    console.log(error);
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ success:false , message: "Invalid creditials" });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ success:false ,message: "Invalid creditials" });
    }

    const token = await jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECREAT
    );
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: false, 
        sameSite: "lax",
        maxAge: 60 * 60 * 1000, 
      })
      .json({ success: true, message: "login successfully", user, token });
  } catch (error) {
    console.log(error);
  }
};

export const logoutController = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ success: true, message: "logout Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllOtherUserController = async (req, res) => {
  try {
    const loginuserId = req.id;
    const otherUser = await User.find({ _id: { $ne: loginuserId } });

    return res
      .status(200)
      .json({ message: "successfully get the otherUser", otherUser });
  } catch (error) {
    console.log(error);
  }
};
