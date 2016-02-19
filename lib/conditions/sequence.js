import Condition from '../condition';

class Sequence extends Condition {
  constructor(conditions, options) {
    super();

    this.conditions = conditions;
    this.options = options || {};
  }

  evaluate(events) {
    var i = 0;

    this.matchedEvents = [];

    function checkConditionInSequence(condition, events) {
      if (condition.evaluate(events)) {
        this.matchedEvents.concat(condition.matchedEvents);

        if (i === 0) {
          this.firstEvent = condition.firstEvent;
        }

        i++;

        if (i === this.conditions.length) {
          this.lastEvent = condition.lastEvent;

          // Check that sequence was performed within time limit
          if (this.options.within && (this.lastEvent.timeStamp - this.firstEvent.timeStamp > this.options.within)) {
            return false;
          }

          return true;
        } else {
          return checkConditionInSequence(this.conditions[i], before(events, condition.firstEvent.timeStamp));
        }
      } else {
        return false;
      }
    }

    return checkConditionInSequence(this.conditions[i], events);
  }
}

export default Sequence;
