import { userModel } from '../db';
import bcrypt from 'bcrypt';
import { makeToken } from '../modules/jwt.js';

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  // register
  async register(registerInfo) {
    const { email, password, nickname, age } = registerInfo;

    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error('Email Already exists');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = { email, nickname, password: hashedPassword, age };
    const createdNewUser = await this.userModel.create(newUserInfo);

    return createdNewUser;
  }

  async login(loginInfo) {
    const { email, password } = loginInfo;

    const user = await this.userModel.findByEmail(email);

    const hashedPassword = await bcrypt.hash(password, 10);

    if (bcrypt.hashSync(user.password, hashedPassword)) {
      const payload = {
        _id: user._id,
        nickname: user.nickname,
        email: user.email,
        age: user.age,
        category: user.category,
      };

      const result = {
        token: makeToken(payload),
      };

      return result;
    } else {
      throw new Error('Invalid Login Information');
    }
  }

  // find All Users
  async getUsers() {
    return await this.userModel.findAll();
  }

  // find User by id
  async getUserById(_id) {
    return await this.userModel.findById(_id);
  }
  async addUserEvent(userId, eventId) {
    return await this.userModel.pushEvent(userId, eventId);
  }
}

const userService = new UserService(userModel);

export { userService };
