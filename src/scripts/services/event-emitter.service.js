export class EventEmitter {
  #listeners = [];

  on(name, cb) {
    this.#listeners.push({
      name,
      cb,
    });
  }

  trigger(eventName, payload) {
    this.#listeners.forEach((listener) => {
      if (listener.name === eventName) {
        listener.cb(payload);
      }
    });
  }
}
