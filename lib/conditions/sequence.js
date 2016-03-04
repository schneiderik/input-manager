import Condition from '../condition';

class Sequence extends Condition {
  constructor(conditions, options) {
    super();

    this.conditions = conditions.reverse();
    this.options = options || {};
  }

  evaluate(events) {
    let i = 0;

    this.matchedEvents = [];

    function checkConditionInSequence(condition, e) {
      if (condition.evaluate(e)) {
        this.matchedEvents.concat(condition.matchedEvents);

        if (i === 0) {
          this.lastEvent = condition.lastEvent;
        }

        i++;

        if (i === this.conditions.length) {
          this.firstEvent = condition.firstEvent;

          // Check that sequence was performed within time limit
          if (this.options.within && (this.lastEvent.timeStamp - this.firstEvent.timeStamp > this.options.within)) {
            this.isValid = false;
            return;
          }

          this.isValid = true;
        } else {
          checkConditionInSequence.call(this, this.conditions[i], this.getEventsBefore(e, condition.firstEvent.timeStamp));
        }
      } else {
        this.isValid = false;
        return;
      }
    }

    checkConditionInSequence.call(this, this.conditions[i], events);

    console.log('SEQUENCE VALID', this.isValid);

    return this.isValid;
  }
}

export default Sequence;
