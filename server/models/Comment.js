import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    createdBy: {
        userId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        }
    },
    categoryId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)

export default Comment