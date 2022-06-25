import { Router } from 'express';
import { eventService, userService } from '../services';
import { decodePayload } from '../modules/jwt.js';

const eventRouter = Router();

eventRouter.get('/events', async function (req, res, next) {
  try {
    const events = await eventService.getEvents();
    let resultEvents = [];
    for (let i = 0; i < events.length; i++) {
      const { _id, time, name, member, ageCoverage, startPoint, level } = events[i];
      const preEvents = {
        _id: _id,
        time: time,
        name: name,
        member: member,
        ageCoverage: ageCoverage,
        startPoint: startPoint,
        level: level,
      };
      resultEvents.push(preEvents);
    }

    res.status(200).json(resultEvents);
  } catch (error) {
    next(error);
  }
});
eventRouter.get('/events/:event_id', async function (req, res, next) {
  try {
    const { event_id } = req.params;
    const events = await eventService.getEvent(event_id);

    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
});
eventRouter.post('/events/join', async function (req, res, next) {
  try {
    const payload = await decodePayload(req.header('Authorization'));
    const user = await userService.addUserEvent(payload._id, req.body.event_id);
    const event = await eventService.addUserEvent(payload._id, req.body.event_id);

    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
});
eventRouter.post('/events/cancel', async function (req, res, next) {
  try {
    const payload = await decodePayload(req.header('Authorization'));
    const user = await userService.deleteUserEvent(payload._id, req.body.event_id);
    const event = await eventService.deleteUserEvent(payload._id, req.body.event_id);

    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
});
export { eventRouter };
