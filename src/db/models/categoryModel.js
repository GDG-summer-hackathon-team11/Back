import { model } from 'mongoose';
import { CategorySchema } from '../schemas/categorySchema.js';

const Category = model('categories', CategorySchema);

export class CategoryModel {
  async findAll() {
    return await Category.find({});
  }
}
const categoryModel = new CategoryModel();

export { categoryModel };
