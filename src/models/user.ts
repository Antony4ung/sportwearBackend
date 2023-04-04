import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String || null,
    },
    image: {
      type: String,
      default: "",
    },
    access_token: {
      type: String,
      require: true,
    },
    emailVerified: {
      type: null || Boolean,
    },
    favProducts: [{
      type: mongoose.Schema.Types.ObjectId || String,
      ref: "Product",
      require: true,
    }],
    phoneNumber: {
      type: String,
      default: ""
    },
    orderHistory: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      require: true,
    }]
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
