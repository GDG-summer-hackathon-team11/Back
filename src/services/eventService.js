import { eventModel } from '../db';

class EventService {
  // 본 파일의 맨 아래에서, new CategoryService(categoryModel) 하면, 이 함수의 인자로 전달됨
  constructor(eventModel) {
    this.eventModel = eventModel;
  }

  // 카테고리 목록을 받음.
  async getEvents() {
    const getEvents = await this.eventModel.findAll();
    return getEvents;
  }
}

const eventService = new EventService(eventModel);

export { eventService };
