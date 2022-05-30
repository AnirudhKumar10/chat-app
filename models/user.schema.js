const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

module.export = mongoose.model("User", userSchema, "users");
