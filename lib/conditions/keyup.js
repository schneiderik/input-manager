import Condition from '../condition';

class Keyup extends Condition {
  constructor(inputName, callback) {
    super();

    this.inputName = inputName;
    this.callback = callback;
  }

  evaluate(events) {
    let event;

    this.matchedEvents = [];

    if (events[0].inputName === this.inputName && events[0].type === 'keyup') {
      event = events[0];
    }

    if (event) {
      this.matchedEvents.push(event);

      if (this.callback) {
        this.callback(this.matchedEvents);
      }
    }

    return this.matchedEvents.length;
  }
}

export default Keyup;
