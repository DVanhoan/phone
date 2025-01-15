import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: [
            {
                product_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1,
                    min: [1, "Quantity must be at least 1"],
                },
            },
        ],
    },
    { timestamps: true }
);

CartSchema.pre("save", function (next) {
    const uniqueProducts = new Map();

    this.products.forEach((product) => {
        const key = product.product_id.toString();
        if (uniqueProducts.has(key)) {
            uniqueProducts.set(
                key,
                uniqueProducts.get(key) + product.quantity
            );
        } else {
            uniqueProducts.set(key, product.quantity);
        }
    });

    this.products = Array.from(uniqueProducts, ([product_id, quantity]) => ({
        product_id,
        quantity,
    }));

    next();
});

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
