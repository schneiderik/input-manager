class Subscriber {
  constructor(condition, callback) {
    this.callback = callback;
    this.condition = condition;

    return this;
  }

  evaluate() {
    let events = this.condition();

    if (events.length) {
      this.callback(events);
    }
  }
}

export default Subscriber;
