import Condition from '../condition';

class Press extends Condition {
  constructor(inputName) {
    super();

    this.inputName = inputName;
  }

  evaluate(events) {
    let pressEvents = this.getEvents(events);

    if (pressEvents.up && pressEvents.down) {
      this.firstEvent = pressEvents.down;
      this.lastEvent = pressEvents.up;
      this.matchedEvents = [pressEvents.down, pressEvents.up];
      this.isValid = true;
    } else {
      this.isValid = false;
    }

    return this.isValid;
  }

  getEvents(events) {
    let upIndex, scopedEvents;
    let pressEvents = {};

    if (events[0].inputName === this.inputName && events[0].action === 'up') {
      pressEvents.up = events[0];
    }

    if (!pressEvents.up) {
      return pressEvents;
    }

    scopedEvents = this.getEventsBefore(events, pressEvents.up.timeStamp);

    pressEvents.down = scopedEvents.find((event) => {
      if (event.inputName === this.inputName && event.action === 'down') {
        return event;
      }
    });

    return pressEvents;
  };
}

export default Press;
