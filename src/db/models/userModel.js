import { model } from 'mongoose';
import { UserSchema } from '../schemas/userSchema.js';

const User = model('users', UserSchema);

export class UserModel {
  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findById(_id) {
    return await User.findOne({ _id });
  }

  async create(userInfo) {
    return await User.create(userInfo);
  }

  async findAll() {
    return await User.find({});
  }
}

const userModel = new UserModel();

export { userModel };
