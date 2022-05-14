import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    createdBy: {
        type: String,
        required: true
    },
    categoryId: {
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