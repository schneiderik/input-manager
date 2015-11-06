import HistoryEvent from './history-event';

class History {
  constructor(events) {
    this.events = events || [];
  }

  record(event) {
    let historyEvent = new HistoryEvent(event);
    this.events.unshift(historyEvent);

    return historyEvent;
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
