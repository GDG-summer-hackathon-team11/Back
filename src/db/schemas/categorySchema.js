import { Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: {
      type: Array,
      required: true,
    },
  },
  {
    collection: 'categories',
    timestamps: true,
  },
);

export { CategorySchema };
