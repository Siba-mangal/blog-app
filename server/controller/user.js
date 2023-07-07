import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error("User already registered");
    }

    req.body.password = hashPassword;
    const newUser = new User(req.body);
    console.log("newUser", newUser);
    const savedUser = await newUser.save();
    console.log("savedUser", savedUser);

    return res.status(200).json({ success: true, msg: "Signup successful" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const login = async (req, res) => {};
