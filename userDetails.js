const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    name: String,
    place: String,
    number:Number,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "User",
  }
);

mongoose.model("User", UserDetailsScehma);
