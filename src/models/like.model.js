const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, "Post id is required"]
    },
    user: {
        type: String,
        
        required: [true, "Username id is required"]
    }
}, {
    timestamps: true,
})

likeSchema.index({ post: 1, user: 1}, { unique: true });

const likeModel = mongoose.model("likes", likeSchema);
module.exports = likeModel;