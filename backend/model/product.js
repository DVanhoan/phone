import mongoose, { Types } from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        }
        ,
        stock: {
            type: Number,
            default: 0
        },
        image_url: {
            type: String,
        }

    }, { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema);

export default Product;