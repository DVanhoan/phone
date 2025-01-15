import Cart from "../model/cart.js";

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user_id: req.user.id }).populate("products.product_id");
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addToCart = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        if (!user_id || !product_id || !quantity) {
            return res.status(400).json({
                message: "Invalid input: user_id, product_id, and quantity are required.",
            });
        }
        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            cart = new Cart({
                user_id,
                products: [{ product_id, quantity }],
            });
            await cart.save();
            return res.status(201).json(cart);
        }


        const existingProduct = cart.products.find(
            (p) => p.product_id.toString() === product_id
        );

        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ product_id, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.error("Error in addToCart:", error.message);
        res.status(400).json({ message: error.message });
    }
};


