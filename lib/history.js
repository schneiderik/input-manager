import keys from '../keys.json';

class History {
  constructor(events) {
    this.events = events || [];
    this.eventCounter = 0;
  }

  record(event) {
    event.index = this.eventCounter;
    this.events.unshift(event);

    this.eventCounter++;

    return event;
  }
}

export default History;
