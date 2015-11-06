class Subscriber {
  constructor(inputName) {
    this.inputName = inputName;
    this.conditions = [];

    return this;
  }

  trigger(callback) {
    this.callback = callback;

    return this;
  }

  occurence(count) {
    conditions.push('occurence');
  };

  evaluate() {
    let i, conditionName;

    for (i = 0; i < this.conditions.length; i++) {
      conditionName = this.conditions[i];

      if (!this['check' + conditionName]()) {
        return false;
      }
    }

    this.callback();
  }
}

export default Subscriber;
