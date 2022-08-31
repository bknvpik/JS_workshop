import { Component } from './component';
import { MyEvent } from '../services/event.service';
import { EventEmitter } from '../services/event-emitter.service';

export class SearchComponent extends Component {
  /**
   * @type {MyEvent[]|null}
   */
  events = [];

  constructor() {
    super();
    this.emitter = new EventEmitter();
  }
  template() {
    return `
        <form class="search-control">
            <input class="search-input" />
            <input class="search-button" type="submit" value="Search" />
        </form>
    `;
  }

  render($container) {
    super.render($container);
    this.#setupSearch();
  }

  #setupSearch() {
    const $form = document.querySelector('.search-control');
    const $input = document.querySelector('.search-input');

    $form?.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const query = $input?.value;
      const filteredEvents = this.events.filter((event) => {
        const queryRegExp = new RegExp(query, 'i');
        return queryRegExp.test(event.title) || queryRegExp.test(event.body);
      });
      this.emitter.trigger('search', {
        query,
        results: filteredEvents,
      });
    });
  }
}
