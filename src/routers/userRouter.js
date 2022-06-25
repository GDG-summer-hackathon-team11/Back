import { Router } from 'express';
import { userService } from '../services';
import { decodePayload } from '../modules/jwt.js';

const userRouter = Router();

userRouter.get('/users', async function (req, res) {
  try {
    const payload = decodePayload(req.header('Authorization'));
    const user = await userService.getUserById(payload.id);

    const responseData = {
      "nickname": user.nickname,
      "email": user.email,
      "age": user.age,
      "category": user.category,
    }

    res.status(200).json(responseData);
  } catch (err) {
    res.status(401).json({ error: `${err.message}` });
  }
});

userRouter.get('/users/events', async function (req, res) {
  try {
    const payload = decodePayload(req.header('Authorization'));

    const user = await userService.getUserById(payload.id);

    res.status(200).json(user.events);
  } catch (err) {
    res.status(401).json({ error: `${err.message}` });
  }
});

userRouter.post('/users/login', async function (req, res) {
  try {
    const loginInfo = {
      "email": req.body.email,
      "password": req.body.password,
    }

    const result = await userService.login(loginInfo);

    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ error: `${err.message}` })
  }
});

userRouter.post('/users/register', async function (req, res) {
  console.log("dd")
  try {
    const registerInfo = {
      "email": req.body.email,
      "password": req.body.password,
      "nickname": req.body.nickname,
      "age": req.body.age,
    }

    const responseData = await userService.register(registerInfo);

    res.status(200).json(responseData)
  } catch (err) {
    res.status(401).json({ error: `${err.message}` })
  }
});

export { userRouter };
