import { Schema } from 'mongoose';

const EventSchema = new Schema(
  {
    time: {
      type: Date,
      required: true,
    },
    startPoint: {
      type: Object,
      required: true,
    },
    checkPoint: {
      type: Array,
    },
    level: {
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
      type: String,
      required: false,
    },
  },
  {
    collection: 'events',
    timestamps: true,
  },
);

export { EventSchema };
