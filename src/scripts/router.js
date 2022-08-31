import { EventEmitter } from './services/event-emitter.service';

export class Router extends EventEmitter {
  use(routes) {
    this.routes = routes;
  }

  start() {
    this.#resolveRoute();
    window.addEventListener('hashchange', this.#resolveRoute.bind(this));
  }

  #resolveRoute() {
    this.trigger('before:resolve');

    const { routes } = this;
    // Ternary Operator (Elvis Operator)
    const hash = location.hash ? location.hash.slice(1) : '/';
    const handler = routes[hash];
    handler?.();

    this.trigger('after:resolve', { hash });
  }
}
