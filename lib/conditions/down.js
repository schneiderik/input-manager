import Condition from '../condition';

class Down extends Condition {
  constructor(inputName) {
    super();

    this.inputName = inputName;
  }

  evaluate(events) {
    this.matchedEvents = [];
    this.isValid = false;

    let event = events.find(function (event, index) {
      if (event.inputName === this.inputName && event.action === 'down') {
        return event;
      }
    });

    if (event) {
      this.matchedEvents.push(event);
      this.isValid = true;
    }

    return this.isValid;
  }
}

export default Down;