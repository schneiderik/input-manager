class Subscriber {
  constructor(condition, callback) {
    this.condition = condition;
    this.callback = callback;
  }

  evaluate(events) {
    if (this.condition.evaluate(events)) {
      console.log('SUBSCRIBER VALID', this.condition.isValid);

      this.callback(this.sortEventsByIndex(this.condition.matchedEvents));
    }
  }

  sortEventsByIndex(events) {
    return events.sort(function (a, b) {
      if (a.index > b.index) {
        return -1;
      }

      if (a.index < b.index) {
        return 1;
      }

      return 0;
    });
  }
}

export default Subscriber;
