const express = require('express');
const userController = require('../controllers/user.controller');
const identifyUser = require('../middlewares/auth.middleware');

const userRouter = express.Router();



//@Route POST /api/users/follow/:userid
//@dedscription Follow a user
//@access Private

userRouter.post("/follow/:username", identifyUser, userController.followUserController); 


//@Route POST /api/users/unfollow/:userid
//@dedscription Unfollow a user
//@access Private
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController);




module.exports = userRouter;