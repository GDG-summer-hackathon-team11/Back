import { userModel } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  // 회원가입
  async addUser(userInfo) {
    // 객체 destructuring
    const { email, fullName, password } = userInfo;

    // 이메일 중복 확인
    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error('이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.');
    }

    // 이메일 중복은 이제 아니므로, 회원가입을 진행함

    // 우선 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = { fullName, email, password: hashedPassword };

    // db에 저장
    const createdNewUser = await this.userModel.create(newUserInfo);

    return createdNewUser;
  }

  // 사용자 전체 목록을 받음.
  async getUsers() {
    return await this.userModel.findAll();
  }
  // 해당하는 사용자 아이디를 토대로 사용자 정보를 받음
  async getUser(_id) {
    return await this.userModel.findById(_id);
  }
}

const userService = new UserService(userModel);

export { userService };
