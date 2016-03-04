import Condition from '../condition';

class Holding extends Condition {
  constructor(inputName, condition) {
    super();

    this.inputName = inputName;
    this.condition = condition;
  }

  evaluate(events) {
    this.isValid = false;

    let holdEvents = this.getEvents(events);

    this.condition.evaluate(events);

    if (holdEvents.length && this.condition.matchedEvents.length && this.condition.firstEvent.timeStamp > holdEvents[0].timeStamp) {
      this.firstEvent = holdEvents[0];
      this.lastEvent = this.condition.lastEvent;
      this.matchedEvents = holdEvents + conditionEvents;
      this.isValid = true;
    }

    return this.isValid;
  }

  getEvents(events) {
    var holdEvents = [];

    events.some((event, index) => {
      if (event.inputName === this.inputName && event.action === 'up') {
        return true;
      }

      if (event.inputName === this.inputName && event.action === 'down') {
        holdEvents.push(event);
      }

      return false;
    });

    return holdEvents;
  };
}

export default Holding;
