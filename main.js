import History from './lib/history';
import Subscriber from './lib/subscriber';
import keys from './keys.json';

class InputManager {
  constructor() {
    this.Subscriber = Subscriber;
    this.subscribers = [];
    this.history =  new History();

    this.bindEvents();
  }

  evaluateSubscribers() {
    this.subscribers.forEach((subscriber) => {
      subscriber.evaluate();
    });
  }

  createSubscriber(condition, callback) {
    let subscriber = new Subscriber(condition, callback);

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
        timeStamp: new Date(event.timeStamp),
        type: event.type,
        action: 'down'
      });

      this.evaluateSubscribers();
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
        timeStamp: new Date(event.timeStamp),
        type: event.type,
        action: 'up'
      });

      this.evaluateSubscribers();
    });

    window.addEventListener('mousedown', (event) => {
      let eventAttrs = {
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: 'MOUSE' + event.button,
        metaKey: event.metaKey,
        shiftKey: event.shiftKey,
        timeStamp: new Date(event.timeStamp),
        x: event.x,
        y: event.y,
        type: event.type,
        action: 'down'
      };

      if (event.target && event.target.tagName === 'CANVAS') {
        eventAttrs.canvasX = event.offsetX;
        eventAttrs.canvasY = event.offsetY;
      }

      this.history.record(eventAttrs);

      this.evaluateSubscribers();
    });

    window.addEventListener('mouseup', (event) => {
      let eventAttrs = {
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: 'MOUSE' + event.button,
        metaKey: event.metaKey,
        shiftKey: event.shiftKey,
        timeStamp: new Date(event.timeStamp),
        x: event.x,
        y: event.y,
        type: event.type,
        action: 'up'
      };

      if (event.target && event.target.tagName === 'CANVAS') {
        eventAttrs.canvasX = event.offsetX;
        eventAttrs.canvasY = event.offsetY;
      }

      this.history.record(eventAttrs);

      this.evaluateSubscribers();
    });
  }
}

export default InputManager;
