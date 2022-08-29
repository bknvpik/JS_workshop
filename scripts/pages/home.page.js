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

  #setupPage() {
    const $eventList = document.querySelector('.event-list');
    const $search = document.querySelector('#search');

    for(let i = 0; i < 3; i++) {
      const event = new EventComponent();
      event.render($eventList);
    }

    const search = new SearchComponent();
    search.render($search);
  }
}