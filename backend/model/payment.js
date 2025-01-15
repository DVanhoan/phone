import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        order_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
        },
        payment_method: {
            type: String,
            enum: ["credit_card", "paypal", "cash_on_delivery"],
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;
