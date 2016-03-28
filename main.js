import History from './lib/history';
import keycode from 'keycode';
import Sequence from './lib/conditions/sequence';
import Keydown from './lib/conditions/keydown';
import Keyup from './lib/conditions/keyup';
import Hold from './lib/conditions/hold';
import Holding from './lib/conditions/holding';
import Simultaneous from './lib/conditions/simultaneous';
import Wait from './lib/conditions/wait';

class InputManager {
  constructor() {
    this.conditions = [];
    this.history =  new History();

    this.bindEvents();
  }

  evaluateConditions() {
    this.conditions.forEach((condition) => {
      condition.evaluate(this.history.events);
    });
  }

  register(condition) {
    this.conditions.push(condition);

    return condition;
  }

  bindEvents() {
    window.addEventListener('keydown', (event) => {
      let keyName = keycode(event);

      this.history.record({
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: keyName,
        inputNumber: keycode(keyName),
        metaKey: event.metaKey,
        repeat: event.repeat,
        shiftKey: event.shiftKey,
        timestamp: new Date(event.timeStamp),
        type: event.type,
      });

      this.evaluateConditions();
    });

    window.addEventListener('keyup', (event) => {
      let keyName = keycode(event);

      this.history.record({
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        inputName: keyName,
        inputNumber: keycode(keyName),
        metaKey: event.metaKey,
        repeat: event.repeat,
        shiftKey: event.shiftKey,
        timestamp: new Date(event.timeStamp),
        type: event.type,
      });

      this.evaluateConditions();
    });

    // window.addEventListener('mousedown', (event) => {
    //   let eventAttrs = {
    //     altKey: event.altKey,
    //     ctrlKey: event.ctrlKey,
    //     inputName: 'MOUSE' + event.button,
    //     metaKey: event.metaKey,
    //     shiftKey: event.shiftKey,
    //     timeStamp: new Date(event.timeStamp),
    //     x: event.x,
    //     y: event.y,
    //     type: event.type,
    //     action: 'down'
    //   };

    //   if (event.target && event.target.tagName === 'CANVAS') {
    //     eventAttrs.canvasX = event.offsetX;
    //     eventAttrs.canvasY = event.offsetY;
    //   }

    //   this.history.record(eventAttrs);

    //   this.evaluateSubscribers();
    // });

    // window.addEventListener('mouseup', (event) => {
    //   let eventAttrs = {
    //     altKey: event.altKey,
    //     ctrlKey: event.ctrlKey,
    //     inputName: 'MOUSE' + event.button,
    //     metaKey: event.metaKey,
    //     shiftKey: event.shiftKey,
    //     timeStamp: new Date(event.timeStamp),
    //     x: event.x,
    //     y: event.y,
    //     type: event.type,
    //     action: 'up'
    //   };

    //   if (event.target && event.target.tagName === 'CANVAS') {
    //     eventAttrs.canvasX = event.offsetX;
    //     eventAttrs.canvasY = event.offsetY;
    //   }

    //   this.history.record(eventAttrs);

    //   this.evaluateSubscribers();
    // });
  }
}

InputManager.conditions = {
  Sequence: Sequence,
  Keydown: Keydown,
  Keyup: Keyup,
  Hold: Hold,
  Holding: Holding,
  Simultaneous: Simultaneous,
  Wait: Wait
};

export default InputManager;
