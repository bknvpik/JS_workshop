const EventService = {
  getDummyEvents() {
    return [
      eventFactory({ title: 'Event 1' }),
      eventFactory({ title: 'Event 2' }),
      eventFactory({ title: 'Event 3' }),
      eventFactory({ title: 'Event 4' }),
    ];
  },

  async fetchEvents() {
    const response = await fetch(config.eventsUrl);
    return response.json();
  },
};
