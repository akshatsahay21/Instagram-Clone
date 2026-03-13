const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { email, username, password, bio, profileImage } = req.body;

  // const isUserExistByEmail = await userModel.findOne({email});
  // if(isUserExistByEmail){
  //     return res.status(400).json({
  //         message: "Email already exists with same email"
  //     })
  // }

  // const isUserExistByUsername = await userModel.findOne({username});
  // if(isUserExistByUsername){
  //     return res.status(400).json({
  //         message: "Username already exists with same username"
  //     })
  // }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message:
        "user already exists" +
        (isUserAlreadyExist.email == email
          ? " with same email"
          : " with same username"),
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });
  // user ka data hona chaiye
  // data unique hona chaiye
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  //username
  //password

  //email
  //password

  const user = await userModel.findOne({
    $or: [
      {
        //condition
        username: username,
      },
      {
        //condition
        email: email,
      },
    ],
  });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }


 

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  )

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage
    }
    });
}

module.exports = {
  registerController,
  loginController
};  