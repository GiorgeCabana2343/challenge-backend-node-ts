import mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  accountId: {
    type: String,
    required: true
  },
});
