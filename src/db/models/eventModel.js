import { model } from 'mongoose';
import { EventSchema } from '../schemas/eventSchema.js';

const Event = model('events', EventSchema);

export class EventModel {
  async findByEmail(email) {
    return await Event.findOne({ email });
  }

  async findById(_id) {
    return await Event.findOne({ _id });
  }

  async findAll() {
    return await Event.find({});
  }
  async pushUser(userId, eventId) {
    return await Event.updateOne({ _id: eventId }, { $push: { member: userId } });
  }
  async pullUser(userId, eventId) {
    return await Event.updateOne({ _id: eventId }, { $pull: { member: userId } });
  }
}

const eventModel = new EventModel();

export { eventModel };
