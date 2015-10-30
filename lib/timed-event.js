class TimedEvent {
  constructor(subscriber, name) {
    this.subscriber = subscriber;
    this.name = name;

    return this;
  }

  within(ms) {
    this.subscriber[this.name].timeLimit = ms;

    return this.subscriber
  }
}

export default TimedEvent;
