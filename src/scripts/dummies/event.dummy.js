import { MyEvent } from '../services/event.service';

/**
 * @type {MyEvent}
 */

const eventDummy = {
  id: '',
  createdTime: '',
  eventTime: '',
  venue: '',
  bannerUrl: 'https://picsum.photos/id/40/300/150',
  author: {
    id: '',
    name: '',
    avatarUrl: '',
  },
  title: 'Workshop z JavaScript',
  body: 'Szkolenie porusza zaawansowane techniki',
};

// Factory Pattern
/**
 *
 * @param {any} override
 * @returns {MyEvent}
 */
export function eventFactory(override = {}) {
  return { ...eventDummy, ...override };
}
