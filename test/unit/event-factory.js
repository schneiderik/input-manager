export default {
  keyDown: function (key, options) {
    let event;

    options = options || {};
    event = new Event('keydown');

    event.keyCode = key;
    event.timestamp = Date.now();

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    global.dispatchEvent(event);

    return event;
  },
  keyUp: function (key, options) {
    let event;

    options = options || {};
    event = new Event('keyup');

    event.keyCode = key;
    event.timestamp = Date.now();

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    global.dispatchEvent(event);

    return event;
  },
  mouseDown: function (element, options) {
    let event;

    element = element || document.body;
    options = options || {};
    event = new Event('mousedown');

    event.timestamp = Date.now();
    event.target = element;

    if (options.x) {
      event.offsetX = options.x;
    }

    if (options.y) {
      event.offsetY = options.y;
    }

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    global.dispatchEvent(event);

    return event;
  },
  mouseUp: function (element, options) {
    let event;

    element = element || document.body;
    options = options || {};
    event = new Event('mouseup');

    event.timestamp = Date.now();
    event.target = element;

    if (options.x) {
      event.offsetX = options.x;
    }

    if (options.y) {
      event.offsetY = options.y;
    }

    ['altKey', 'ctrlKey', 'metaKey', 'repeat', 'shiftKey'].forEach((key) => {
      event[key] = options[key] != null ? options[key] : false;
    });

    global.dispatchEvent(event);

    return event;
  }
};
