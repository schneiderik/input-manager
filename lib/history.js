class History {
  constructor(events) {
    this.events = events || [];
  }

  record(event) {
    this.events.unshift(event);

    return event;
  }

  filter(filters) {
    filteredHistory = this.events.filter((event) => {
      let prop;

      for (prop in filters) {
        return filters[prop] === event[prop];
      }
    });

    return new History(filteredHistory);
  }
}

export default History;
