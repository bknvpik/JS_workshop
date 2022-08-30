import { compile } from '../helpers/compile';
import { EventModel } from '../models/event.model';

export class EventComponent {
  /**
   * @type {EventModel|null}
   */
  event = null;

  /**
   *
   * @param {EventModel|null} eventModel
   * @returns {string}
   */
  template(eventModel) {
    if (!eventModel) {
      throw new Error('eventModel is a falsy value');
    }
    const { bannerUrl, title, body } = eventModel;
    return `
    <div class="event" data-type="component">
      <img src="${bannerUrl}" alt="" />
        <h2>${title}</h2>
        <p>${body}</p>
    </div>`;
  }

  render($container) {
    // Compile
    const $component = compile(this.template(this.event));
    // Rendering
    $container.append($component);
  }
}
