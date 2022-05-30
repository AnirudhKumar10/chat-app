const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  senderId: { type: mongoose.ObjectId, require: true },
  receiverId: { type: mongoose.ObjectId, required: true },
  message: { type: String, required: true },
  sendtime: { type: Date, default: Date.now, require: true },
  recievetime: { type: String, required: true },
  readTime: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, require: true },
  updatedAt: { type: Date, default: Date.now, require: true },
});

module.export = mongoose.model("User", userSchema, "users");
