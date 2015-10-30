import History from './lib/history';
import Subscriber from './lib/subscriber';
import keys from './keys.json';

let InputManager;

function on(inputName) {
  var subscriber = new Subscriber(inputName);

  this.subscribers.push(subscriber);

  return subscriber;
}

function evaluateSubscribers() {
  this.subscribers.forEach((subscriber) => {
    subscriber.evaluate();
  });
}

InputManager = {
  subscribers: [],
  history: new History(),
  on: on,
  evaluateSubscribers: evaluateSubscribers
};

window.addEventListener('keydown', function (event) {
  let keyCode = event.keyCode || event.key;

  InputManger.history.record({
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    inputName: keys[keyCode],
    keyCode: event.keyCode,
    metaKey: event.metaKey,
    repeat: event.repeat,
    shiftKey: event.shiftKey,
    timeStamp: new Date(event.timestamp),
    direction: 'down'
  });
});

window.addEventListener('keyup', function (event) {
  let keyCode = event.keyCode || event.key;

  InputManger.history.record({
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    inputName: keys[keyCode],
    keyCode: event.keyCode,
    metaKey: event.metaKey,
    repeat: event.repeat,
    shiftKey: event.shiftKey,
    timeStamp: new Date(event.timestamp),
    direction: 'up'
  });
});

export default InputManager;
