import HistoryEvent from './history-event';
import keys from '../keys.json';

class History {
  constructor(events) {
    this.events = events || [];
  }

  record(event) {
    let historyEvent;
    let keyCode = event.keyCode || event.key;

    let eventAttrs = {
      altKey: event.altKey,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      repeat: event.repeat,
      shiftKey: event.shiftKey,
      type: event.type,
      timeStamp: new Date(event.timestamp),
    };

    switch (event.type) {
      case 'keydown':
        eventAttrs.inputName = keys[keyCode];
        eventAttrs.inputAlias = keyCode;
        eventAttrs.action = 'down';
        break
      case 'keyup':
        eventAttrs.inputName = keys[keyCode];
        eventAttrs.inputAlias = keyCode;
        eventAttrs.action = 'up';
        break
      case 'mousedown':
        eventAttrs.inputName = 'MOUSE' + event.button;
        eventAttrs.action = 'down';
        eventAttrs.x = event.x;
        eventAttrs.y = event.y;

        if (event.target.tagName === 'CANVAS') {
          eventAttrs.canvasX = event.offsetX;
          eventAttrs.canvasY = event.offsetY;
        }
        break
      case 'mouseup':
        eventAttrs.inputName = 'MOUSE' + event.button;
        eventAttrs.action = 'up';
        eventAttrs.x = event.x;
        eventAttrs.y = event.y;

        if (event.target.tagName === 'CANVAS') {
          eventAttrs.canvasX = event.offsetX;
          eventAttrs.canvasY = event.offsetY;
        }
        break
    }

    historyEvent = new HistoryEvent(eventAttrs);

    this.events.unshift(historyEvent);

    return historyEvent;
  }

  filter(filters) {
    let filteredHistory = this.events.filter((event) => {
      let prop;

      for (prop in filters) {
        return filters[prop] === event.attrs[prop];
      }
    });

    return new History(filteredHistory);
  }
}

export default History;
