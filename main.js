import History from './lib/history';
import Subscriber from './lib/subscriber';
import keys from './keys.json';

class InputManager {
  constructor() {
    this.subscribers = [];
    this.history =  new History();

    this.bindEvents();
  }

  on(inputName) {
    let subscriber = new Subscriber(inputName);

    this.subscribers.push(subscriber);

    return subscriber;
  }

  bindEvents() {
    window.addEventListener('keydown', (event) => {
      let keyCode = event.keyCode || event.key;

      this.history.record({
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: keys[keyCode],
        inputAlias: keyCode,
        metaKey: event.metaKey,
        repeat: event.repeat,
        shiftKey: event.shiftKey,
        timeStamp: new Date(event.timestamp),
        action: 'down'
      });
    });

    window.addEventListener('keyup', (event) => {
      let keyCode = event.keyCode || event.key;

      this.history.record({
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: keys[keyCode],
        inputAlias: keyCode,
        metaKey: event.metaKey,
        repeat: event.repeat,
        shiftKey: event.shiftKey,
        timeStamp: new Date(event.timestamp),
        action: 'up'
      });
    });

    window.addEventListener('mousedown', (event) => {
      let eventAttrs = {
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: 'MOUSE' + event.button,
        metaKey: event.metaKey,
        repeat: event.repeat,
        shiftKey: event.shiftKey,
        timeStamp: new Date(event.timestamp),
        x: event.x,
        y: event.y,
        action: 'down'
      };

      if (event.target.tagName === 'CANVAS') {
        eventAttrs.canvasX = event.offsetX;
        eventAttrs.canvasY = event.offsetY;
      }

      this.history.record(eventAttrs);
    });

    window.addEventListener('mouseup', (event) => {
      let eventAttrs = {
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: 'MOUSE' + event.button,
        metaKey: event.metaKey,
        repeat: event.repeat,
        shiftKey: event.shiftKey,
        timeStamp: new Date(event.timestamp),
        x: event.x,
        y: event.y,
        action: 'up'
      };

      if (event.target.tagName === 'CANVAS') {
        eventAttrs.canvasX = event.offsetX;
        eventAttrs.canvasY = event.offsetY;
      }

      this.history.record(eventAttrs);
    });
  }
}

export default InputManager;
