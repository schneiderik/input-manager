import Condition from '../condition';

class Keydown extends Condition {
  constructor(inputName, callback) {
    super();

    this.inputName = inputName;
    this.callback = callback;
  }

  evaluate(events) {
    let event;

    this.matchedEvents = [];

    if (events[0].inputName === this.inputName && events[0].type === 'keydown') {
      event = events[0];
    }

    if (event && !event.repeat) {
      this.matchedEvents.push(event);

      if (this.callback) {
        this.callback(this.matchedEvents);
      }
    }

    return this.matchedEvents.length;
  }
}

export default Keydown;
