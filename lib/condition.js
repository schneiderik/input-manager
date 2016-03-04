class Condition {
  constructor() {
    this.isValid = false;
    this.firstEvent = null;
    this.lastEvent = null;
  }

  within(events, duration) {
    return events.filter(function (event) {
      if (event.timeStamp > Date.now() - duration) {
        return event;
      }
    });
  }

  getEventsBefore(events, timestamp) {
    return events.filter(function (event) {
      if (event.timeStamp < timestamp) {
        return event;
      }
    });
  }
}

export default Condition;
