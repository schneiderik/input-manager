import Condition from '../condition';

class Sequence extends Condition {
  constructor(conditions, callback, options) {
    super();

    this.conditions = conditions;

    if (this.isPlainObject(callback) && options == null) {
      this.callback = null;
      this.options = callback || {};
    } else {
      this.callback = callback;
      this.options = options || {};
    }

    this.currentIndex = 0;
    this.matchedEvents = [];
    this.firstEvent = null;
  }

  evaluate(events) {
    let condition;

    if (this.isValid) {
      this.reset();
    }

    condition = this.conditions[this.currentIndex];

    if (condition.evaluate(events)) {
      if (this.currentIndex === 0) {
        this.firstEvent = events[0];
      }

      if (!this.withinTimeLimit(events[0])) {
        this.reset();
        return;
      }

      this.matchedEvents.concat(condition.matchedEvents);
      this.currentIndex++;

      if (this.currentIndex === this.conditions.length) {
        if (this.callback) {
          this.callback(this.matchedEvents);
        }

        this.isValid = true;
      }
    } else {
      if (condition.constructor.name === 'Keydown' && events[0].type === 'keyup') {
        return;
      }

      if (condition.constructor.name === 'Keyup' && events[0].type === 'keydown') {
        return;
      }

      this.reset();
    }

    return this.isValid;
  }

  reset() {
    this.isValid = false;
    this.matchedEvents = [];
    this.currentIndex = 0;
  }

  withinTimeLimit(event) {
    return this.firstEvent && this.options.within && event.timestamp - this.firstEvent.timestamp < this.options.within;
  }

  isPlainObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  }
}

export default Sequence;
