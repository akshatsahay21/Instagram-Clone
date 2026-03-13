const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
    password: {
    type: String,
    required: [true, "Password is required"],
  },
 bio: String,
    profileImage: {
    type: String,
    default: "https://ik.imagekit.io/xig2klow2/avatar-default-user-profile-icon-simple-flat-vector-57234190.webp"
    }
});


const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
