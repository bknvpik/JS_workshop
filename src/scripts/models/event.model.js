import { MyEvent } from '../services/event.service';

export class EventModel {
  /**
   * @param {MyEvent} event
   */
  constructor(event) {
    this.event = event;
  }

  get getTime() {
    return (
      new Date(this.event.eventTime).getTime() -
      new Date(this.event.createdTime).getTime()
    );
  }

  set authorName(name) {
    this.event.author.name = name;
  }

  get venue() {
    return this.event.venue;
  }

  get bannerUrl() {
    return this.event.bannerUrl;
  }

  get title() {
    return this.event.title;
  }

  get body() {
    return this.event.body;
  }
}
