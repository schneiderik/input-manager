import Condition from '../condition';

class Press extends Condition {
  constructor(inputName) {
    super();

    this.inputName = inputName;
  }

  evaluate() {
    pressEvents = this.getEvents(events);

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
    var upIndex;
    var pressEvents = {};

    pressEvents.up = events.find(function (event, index) {
      if (event.inputName === this.inputName && event.action === 'down') {
        pressEvents.down = event;
      }

      if (event.inputName === this.inputName && event.action === 'up') {
        upIndex = index;
        return event;
      }
    });

    if (pressEvents.down && !pressEvents.up) {
      return pressEvents;
    }

    scopedEvents = events.slice(upIndex + 1);

    pressEvents.down = scopedEvents.find(function (event, index) {
      if (event.inputName === this.inputName && event.action === 'down') {
        return event;
      }
    });

    return pressEvents;
  };
}

export default Press;
