import Condition from '../condition';

class Simultaneous extends Condition {
  constructor(conditions, options) {
    super();

    this.conditions = conditions;
    this.options = options || {};
  }

  evaluate(events) {
    let downEvents = this.getDownEvents();
    let upEvents = this.getUpEvents();

    this.matchedEvents = [];

    if (downEvents.length) {
      if (this.isWithinThreshold(downEvents)) {
        this.matchedEvents.concat(downEvents);
      } else {
        this.isValid = false;
        return this.isValid;
      }
    }

    if (upEvents.length) {
      if (this.isWithinThreshold(upEvents)) {
        this.matchedEvents.concat(upEvents);
      } else {
        this.isValid = false;
        return this.isValid;
      }
    }

    this.isValid = true;
    return this.isValid;
  }

  isWithinThreshold(events) {

    return Math.abs(events) <= this.options.threshold;
  }
}

export default Simultaneous;
