import keys from '../keys.json';

class History {
  constructor(events) {
    this.events = events || [];
    this.eventCounter = 0;
  }

  record(event) {
    event.index = this.eventCounter;

    if (this.eventCounter > 99) {
      this.events.pop();
    }

    this.events.unshift(event);

    this.eventCounter++;

    return event;
  }
}

export default History;
