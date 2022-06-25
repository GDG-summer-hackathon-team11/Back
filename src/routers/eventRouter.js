import { Router } from 'express';
import { eventService } from '../services';

const eventRouter = Router();

eventRouter.get('/events', async function (req, res, next) {
  try {
    const events = await eventService.getEvents();
    let resultEvents = [];
    for (let i = 0; i < events.length; i++) {
      const { time, name, member, ageCoverage, startPoint, level } = events[i];
      const preEvents = {
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
export { eventRouter };
