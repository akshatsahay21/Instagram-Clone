const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()});
const identifyUser = require("../middlewares/auth.middleware");
//POST /api/posts
//req.body =  {caption, image-file}
//api/posts/*
//description: Create a post, image should be uploaded to cloudinary and url should be saved in db, also save public_id of the image in db for future use
postRouter.post("/", upload.single("image"),identifyUser , postController.createPostController);


//GET /api/posts
//description: Get all posts of the user and his followings, also support pagination using query params page and limit
postRouter.get("/", identifyUser, postController.getPostController);


// GET /api/posts/details:postId
//return a post details by id, also check whether the post belongs to the user or not

postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController);


//@Route POST /api/posts/like/:postId
//@dedscription Like a post
//@access Private
postRouter.post("/like/:postId", identifyUser, postController.likePostController);



module.exports = postRouter;