import { HomePage } from './pages/home.page';
import { MapPage } from './pages/map.page';
import { Router } from '../scripts/router';
import '../styles/main.css';

function main() {
  const $outlet = document.querySelector('#content');

  const routes = {
    '/': () => {
      const page = new HomePage();
      page.render($outlet);
    },
    '/map': () => {
      const page = new MapPage();
      page.render($outlet);
    },
  };

  const router = new Router();
  router.use(routes);
  router.start();
}

window.addEventListener('DOMContentLoaded', main);
