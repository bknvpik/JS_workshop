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
    }
  }

  const router = new Router();
  router.use(routes);
  router.start();
}

window.addEventListener('DOMContentLoaded', main);
