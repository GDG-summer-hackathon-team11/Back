import { Schema } from 'mongoose';

class Point {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }
}

const EventSchema = new Schema(
  {
    time: {
      type: Date,
      required: true,
    },
    startPoint: {
      type: Point,
      required: true,
    },
    startPointName: {
      type: String,
    },
    checkPoint: {
      type: Array,
    },
    distance: {
      type: Number,
    },
    ageCoverage: {
      type: Number,
    },
    member: {
      type: Array,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      required: false,
    },
  },
  {
    collection: 'events',
    timestamps: true,
  },
);

export { EventSchema };
