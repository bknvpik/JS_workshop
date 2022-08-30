class HomePage {
  template() {
    return `
    <div id="events-page">
      <div id="search"></div>
      <div class="event-list"></div>
    </div>`;
  }

  render($container) {
    const $component = compile(this.template());
    $container.append($component);
    this.#setupPage();
  }

  async #setupPage() {
    const $eventList = document.querySelector('.event-list');
    const $search = document.querySelector('#search');
    const $fragment = document.createDocumentFragment();

    const events = await EventService.fetchEvents();

    events.forEach((event) => {
      const evt = new EventComponent();
      evt.event = event;
      evt.render($fragment);
    });

    $eventList?.append($fragment);

    const search = new SearchComponent();
    search.render($search);
  }
}
