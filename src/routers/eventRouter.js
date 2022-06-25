import { Router } from 'express';
import { eventService } from '../services';

const eventRouter = Router();

eventRouter.get('/categories', async function (req, res, next) {
  try {
    // 전체 카테고리 목록을 얻음
    const categories = await eventService.getCategories();
    // 카테고리 목록(배열)을 JSON 형태로 프론트에 보냄
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

export { eventRouter };
