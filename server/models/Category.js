import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    posts: {
        type: [String],
        ref: 'Post',
    },
    commentsCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const Category = mongoose.model('Category', categorySchema)

export default Category