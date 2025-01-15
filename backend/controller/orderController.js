import Order from "../model/order.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user_id: req.user.id }).populate("products.product_id");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}