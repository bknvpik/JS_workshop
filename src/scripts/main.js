import { HomePage } from './pages/home.page';
import { MapPage } from './pages/map.page';
import { Router } from '../scripts/router';
import { EventService } from './services/event.service';
import '../styles/main.css';

function main() {
  const $outlet = document.querySelector('#content');

  // const events = EventService.getDummyEvents();
  // const events = await EventService.fetchEvents();
  const events = EventService.produceEvents();

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
  router.start();
}

window.addEventListener('DOMContentLoaded', main);
