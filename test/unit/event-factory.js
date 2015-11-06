export default {
  keyDown: function (key, options) {
    let event;

    options = options || {};
    event = document.createEvent('Event');

    event.keyCode = key;
    event.timestamp = Date.now();

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    event.initEvent('keydown');
    global.dispatchEvent(event);

    return event;
  },
  keyUp: function (key, options) {
    let event;

    options = options || {};
    event = document.createEvent('Event');

    event.keyCode = key;
    event.timestamp = Date.now();

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    event.initEvent('keyup');
    global.dispatchEvent(event);

    return event;
  },
  mouseDown: function (element, options) {
    let event;

    element = element || global;
    options = options || {};
    event = document.createEvent('Event');

    event.timestamp = Date.now();
    event.target = element;
    event.button = options.button || 0;

    if (options.x) {
      event.offsetX = options.x;
    }

    if (options.y) {
      event.offsetY = options.y;
    }

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    event.initEvent('mousedown');
    element.dispatchEvent(event);

    return event;
  },
  mouseUp: function (element, options) {
    let event;

    element = element || global;
    options = options || {};
    event = document.createEvent('Event');

    event.timestamp = Date.now();
    event.target = element;
    event.button = options.button || 0;

    if (options.x) {
      event.offsetX = options.x;
    }

    if (options.y) {
      event.offsetY = options.y;
    }

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    event.initEvent('mouseup');
    element.dispatchEvent(event);

    return event;
  }
};
