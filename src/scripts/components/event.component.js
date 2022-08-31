import { compile } from '../helpers/compile';
import { EventModel } from '../models/event.model';
import { Component } from './component';

export class EventComponent extends Component {
  /**
   * @type {EventModel|null}
   */
  event = null;

  /**
   *
   * @returns {string}
   */
  template() {
    if (!this.event) {
      throw new Error('this.event is a falsy value');
    }
    const { bannerUrl, title, body } = this.event;
    return `
    <div class="event" data-type="component">
      <img src="${bannerUrl}" alt="" />
        <h2>${title.fancySlice(10)}</h2>
        <p>${body.fancySlice(30)}</p>
    </div>`;
  }
}
