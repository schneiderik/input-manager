import TimedEvent from './timed-event';

class Subscriber {
  constuctor(inputName) {
    this.inputName = inputName;

    return this;
  }

  trigger(callback) {
    this.callback = callback;

    return this;
  }

  occurence(count) {
    this.occurence = {
      expectedCount: count;
      count: 0;
    }

    return new TimedEvent(this, );
  };

  withinOccurenceTimeLimit() {
    history = InputManager.history.for(this.inputName);
    return history.recent - this.input.history[this.expectedOccurenceCount - 1] < this.occurenceTimeLimit;
  }

  evaluate() {
    if (this.occurence) {
    }

    this.callback();
  }
}

export default Subscriber;
