const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        required: [true, "imgURL is required for creating a post"]
    },
    user: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "userId is required for creating a post"]
    }
});

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;