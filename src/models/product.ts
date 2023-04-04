import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    photoUrl: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
    },
    inStock: [
      {
        name: String,
        itemsLeft: Number,
      },
    ],
    rating: {
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
