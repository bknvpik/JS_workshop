import { eventFactory } from '../dummies/event.dummy';
import { config } from '../config';
import { eventGenerator } from '../generators/event.generator';

/**
 * @typedef User
 * @property {string} id
 * @property {string} name
 * @property {string} avatarUrl
 */

/**
 * @typedef MyEvent
 * @property {string} id
 * @property {string} createdTime
 * @property {string} eventTime
 * @property {string} venue
 * @property {string} bannerUrl
 * @property {User} author
 * @property {string} title
 * @property {string} body
 */

export const EventService = {
  /**
   *
   * @returns {MyEvent[]}
   */
  getDummyEvents() {
    return [
      eventFactory({ title: 'Event 1' }),
      eventFactory({ title: 'Event 2' }),
      eventFactory({ title: 'Event 3' }),
      eventFactory({ title: 'Event 4' }),
    ];
  },

  /**
   *
   * @returns {Promise<MyEvent[]>}
   */
  async fetchEvents() {
    const response = await fetch(config.eventsUrl);
    return response.json();
  },

  produceEvents() {
    const events = [];
    const gen = eventGenerator();
    const start = Date.now();
    for (const event of gen) {
      const end = Date.now();
      if (end > start + 10) {
        break;
      }
      events.push(event);
    }
    return events;
  },
};
