const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()});
//POST /api/posts
//req.body =  {caption, image-file}
//api/posts/*


postRouter.post("/", upload.single("image"), postController.createPostController);


//GET /api/posts
postRouter.get("/", postController.getPostController);


// GET /api/posts/details:postId
//return a post details by id, also check whether the post belongs to the user or not

postRouter.get("/details/:postId", postController.getPostDetailsController);


module.exports = postRouter;