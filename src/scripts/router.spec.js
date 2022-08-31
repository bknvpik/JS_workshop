import 'jsdom-global/register';
import { Router } from './router';

describe('Router', () => {
  it('should resolve handler at start', () => {
    let isHandlerCalled = false;
    const routes = {
      '/': () => {
        isHandlerCalled = true;
      },
    };
    const router = new Router();
    router.use(routes);
    router.start();
    expect(isHandlerCalled).toEqual(true);
  });
  it('should resolve route when change hash', () => {
    let isHandlerCalled = false;
    const routes = {
      '/': () => null,
      '/about': () => {
        isHandlerCalled = true;
      },
    };
    const router = new Router();
    router.use(routes);
    router.start();
    location.hash = '/about';
    window.dispatchEvent(new Event('hashchange'));
    expect(isHandlerCalled).toEqual(true);
  });
});
