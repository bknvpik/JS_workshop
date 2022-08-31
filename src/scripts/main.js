import '../styles/main.css';
import './native_extensions/fancy-slice';
import { HomePage } from './pages/home.page';
import { MapPage } from './pages/map.page';
import { Router } from './router';
import { EventService } from './services/event.service';
import { clearDOMElement } from './utils/clearDOMElement';

async function main() {
  // console.log('hello world');

  const $outlet = document.querySelector('#content');

  // const events = EventsService.getDummyEvents();
  const events = await EventService.fetchEvents();
  // const events = EventsService.produceEvents();

  const routes = {
    '/': () => {
      const page = new HomePage();
      page.events = events;
      page.render($outlet);
    },
    '/map': () => {
      const page = new MapPage();
      page.events = events;
      page.render($outlet);
    },
  };
  const router = new Router();
  router.use(routes);
  router.on('before:resolve', () => {
    clearDOMElement($outlet);
  });
  router.on('after:resolve', (payload) => {
    console.log('router, resolve', payload);
  });
  router.start();

  // Hermetyzacja / Encapsulate
  // router.#resolveRoute();
}

// main();
// window.addEventListener('load', main);
window.addEventListener('DOMContentLoaded', main);
