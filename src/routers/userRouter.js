import { Router } from 'express';
import { userService } from '../services';

const userRouter = Router();

userRouter.get('/user-list', async function (req, res, next) {
  try {
    // 전체 사용자 목록을 얻음
    const users = await userService.getUsers();

    // 사용자 목록(배열)을 JSON 형태로 프론트에 보냄
    res.status(200).json(users);
  } catch (err) {
    res.status(401).json({ error: `${err.message}` });
  }
});

export { userRouter };
