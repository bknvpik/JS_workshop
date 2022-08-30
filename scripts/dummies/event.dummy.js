const eventDummy = {
  bannerUrl: 'https://picsum.photos/id/40/300/150',
  title: 'Workshop z JavaScript',
  body: 'Szkolenie porusza zaawansowane techniki',
};

// Factory Pattern
function eventFactory(override = {}) {
  return { ...eventDummy, ...override };
}
