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
}

const eventModel = new EventModel();

export { eventModel };
