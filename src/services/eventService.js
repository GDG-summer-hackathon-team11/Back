import { eventModel } from '../db';

class EventService {
  // 본 파일의 맨 아래에서, new CategoryService(categoryModel) 하면, 이 함수의 인자로 전달됨
  constructor(eventModel) {
    this.eventModel = eventModel;
  }
  async getEvent(_id) {
    const getEvent = await this.eventModel.findById(_id);
    return getEvent;
  }

  // 카테고리 목록을 받음.
  async getEvents() {
    const getEvents = await this.eventModel.findAll();
    return getEvents;
  }
  async addUserEvent(userId, eventId) {
    return await this.eventModel.pushUser(userId, eventId);
  }
  async deleteUserEvent(userId, eventId) {
    return await this.eventModel.pullUser(userId, eventId);
  }
}

const eventService = new EventService(eventModel);

export { eventService };
