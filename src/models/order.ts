import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    address: {
        type: String,
        require: true
    },
    isPaymentAccept: {
        type: Boolean,
        default: false
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    totalPrice: {
        type: Number,
        default: false
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            require: true,
        }
    ]

}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
