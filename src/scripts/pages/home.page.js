import { EventComponent } from '../components/event.component';
import { EventModel } from '../models/event.model';
import { SearchComponent } from '../components/search.component';
import { Component } from '../components/component';
import { clearDOMElement } from '../utils/clearDOMElement';
import { MyEvent } from '../services/event.service';

export class HomePage extends Component {
  /**
   * @type {MyEvent[]}
   */
  events = [];

  template() {
    return `
      <div id="events-page">
        <div id="search"></div>
        <div class="event-list"></div>
      </div>
    `;
  }

  render($container) {
    super.render($container);
    this.#setupPage();
  }

  #displayEvents(events) {
    const $eventList = document.querySelector('.event-list');
    const $fragment = document.createDocumentFragment();

    events.forEach((event) => {
      const evt = new EventComponent();
      evt.event = new EventModel(event);
      // console.log({ model: evt.event, event });
      evt.render($fragment);
      // evt.render($eventList);
    });

    clearDOMElement($eventList);

    // Renderowanie
    $eventList?.append($fragment);
  }

  async #setupPage() {
    const $search = document.querySelector('#search');

    this.#displayEvents(this.events);

    // Debugger Statement
    // debugger;

    // for (let i = 0; i < 3; i++) {
    // }

    const search = new SearchComponent();
    search.events = this.events;
    search.render($search);
    search.emitter.on('search', (searchData) => {
      const { results } = searchData;
      this.#displayEvents(results);
    });

    // Duplicated Code (Anti-pattern)
    // const evt1 = new EventComponent();
    // evt1.render(eventList);
    // const evt2 = new EventComponent();
    // evt2.render(eventList);
    // const evt3 = new EventComponent();
    // evt3.render(eventList);
  }
}
