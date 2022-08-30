import { compile } from '../helpers/compile';
import { MyEvent } from '../services/event.service';

export class MapPage {
  /**
   *
   * @type {MyEvent[]}
   */
  events = [];

  #eventsByVenue = [];

  template() {
    return `
      <div id="map-page">
        ${Object.keys(this.#eventsByVenue)
          .map((key) => {
            const events = this.#eventsByVenue[key];
            return `
              <details>
                <summary>[${events.length} items] ${key}</summary>
                <ul>
                  ${events.map((event) => `<li>${event.title}</li>`).join('')}
                </ul>
              </details>
            `;
          })
          .join('')}
      </div>
    `;
  }

  render($container) {
    this.#setupPage();

    const $component = compile(this.template());
    $container.append($component);
  }

  #setupPage() {
    const eventsByVenue = [];

    this.events.forEach((event) => {
      if (!eventsByVenue[event.venue]) {
        eventsByVenue[event.venue] = [];
      }
      eventsByVenue[event.venue].push(event);
    });

    this.#eventsByVenue = eventsByVenue;
  }
}
