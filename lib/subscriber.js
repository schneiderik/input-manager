class Subscriber {
  constructor(condition, callback) {
    this.condition = condition;
    this.callback = callback;
  }

  evaluate() {
    let matchedEvents = this.condition.evaluate();

    matchedEvents = this.sortEventByIndex(matchedEvents);

    if (this.condition.isValid) {
      this.callback(matchedEvents);
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
