import { model } from 'mongoose';
import { CategorySchema } from  "../schemas/categorySchema.js";

const Category = model('categories', UserSchema);

export class CategoryModel {

}