import Condition from '../condition';

class Holding extends Condition {
  constructor(inputName, condition) {
    super();

    this.inputName = inputName;
    this.condition = condition;
  }

  evaluate(events) {
    this.isValid = false;
    this.matchedEvents = [];

    holdEvents = getEvents(events);

    if (holdEvents.length) {
      // If N was pushed down before M was held retur
      if (nPressEvents.down.timeStamp < mHoldEvents[mHoldEvents.length - 1].timeStamp) {
        return [];
      }

      // If M was held down for less than 500ms before N was pressed
      if (nPressEvents.down.timeStamp - mHoldEvents[mHoldEvents.length - 1].timeStamp < 500) {
        return [];
      }

      matchedEvents = matchedEvents.concat(mHoldEvents);
    }

    return this.isValid;

    events = before(events, mHoldEvents[mHoldEvents.length - 1].timeStamp);
  }

  getEvents(events) {
    var holdEvents = [];

    events.some(function (event, index) {
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
