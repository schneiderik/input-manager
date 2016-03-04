import Condition from '../condition';

class Simultaneous extends Condition {
  constructor(conditions, options) {
    super();

    this.conditions = conditions;
    this.options = options || {};
  }

  evaluate(events) {
    let allConditionsValid = true;
    this.matchedEvents = [];

    this.conditions.forEach((condition) => {
      let valid = condition.evaluate(events);

      if (!valid) {
        allConditionsValid = false;
      }
    });

    console.log(this.conditions, allConditionsValid);

    if (!allConditionsValid) {
      this.isValid = false;
      return this.isValid;
    }

    let downEvents = this.getDownEvents();
    let upEvents = this.getUpEvents();

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

    this.firstEvent = downEvents[0] || upEvents[0];
    this.lastEvent = upEvents[upEvents.length - 1] || downEvents[downEvents.length - 1];
    this.isValid = true;
    return this.isValid;
  }

  getDownEvents() {
    return this.sortEventsByIndex(this.conditions.map((condition) => {
      console.log(condition);
      if (condition.firstEvent.action === 'down') {
        return condition.firstEvent;
      }
    }));
  }

  getUpEvents() {
    return this.sortEventsByIndex(this.conditions.map((condition) => {
      if (condition.lastEvent.action === 'up') {
        return condition.lastEvent;
      }
    }));
  }

  sortEventsByIndex(events) {
    events.sort(function (a, b) {
      if (a.index > b.index) {
        return -1;
      }

      if (a.index < b.index) {
        return 1;
      }

      return 0;
    });
  }

  isWithinThreshold(events) {
    return Math.abs(events[events.length - 1] - events[0].timeStamp) <= this.options.threshold;
  }
}

export default Simultaneous;
