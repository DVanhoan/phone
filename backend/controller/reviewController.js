import Review from "../model/review.js";

export const create = async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getReviewsByProduct = async (req, res) => {
    try {
        const reviews = await Review.find({ product_id: req.params.product_id });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

