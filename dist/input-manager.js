(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.InputManager = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  8: "BACKSPACE",
  9: "TAB",
  13: "ENTER",
  16: "SHIFT",
  17: "CTRL",
  18: "ALT",
  19: "PAUSE",
  27: "ESC",
  32: "SPACE",
  33: "PAGE_UP",
  34: "PAGE_DOWN",
  35: "END",
  36: "HOME",
  37: "LEFT",
  38: "UP",
  39: "RIGHT",
  40: "DOWN",
  45: "INSERT",
  46: "DELETE",
  48: "NUM0",
  49: "NUM1",
  50: "NUM2",
  51: "NUM3",
  52: "NUM4",
  53: "NUM5",
  54: "NUM6",
  55: "NUM7",
  56: "NUM8",
  57: "NUM9",
  61: "PLUS",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  91: "CMD_LEFT",
  93: "CMD_RIGHT",
  96: "NUMPAD0",
  97: "NUMPAD1",
  98: "NUMPAD2",
  99: "NUMPAD3",
  100: "NUMPAD4",
  101: "NUMPAD5",
  102: "NUMPAD6",
  103: "NUMPAD7",
  104: "NUMPAD8",
  105: "NUMPAD9",
  106: "NUMPAD_STAR",
  107: "NUMPAD_PLUS",
  109: "NUMPAD_MINUS",
  110: "NUMPAD_DOT",
  111: "NUMPAD_SLASH",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  186: "SEMICOLON",
  187: "EQUAL",
  188: "COMMA",
  189: "MINUS",
  190: "PERIOD",
  191: "FORWARDSLASH",
  192: "TILDE",
  219: "LEFT_BRACKET",
  220: "BACKSLASH",
  221: "RIGHT_BRACKET",
  222: "APOSTROPHE"
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Condition = (function () {
  function Condition() {
    _classCallCheck(this, Condition);

    this.isValid = false;
    this.firstEvent = null;
    this.lastEvent = null;
  }

  _createClass(Condition, [{
    key: "within",
    value: function within(events, duration) {
      return events.filter(function (event) {
        if (event.timeStamp > Date.now() - duration) {
          return event;
        }
      });
    }
  }, {
    key: "getEventsBefore",
    value: function getEventsBefore(events, timestamp) {
      return events.filter(function (event) {
        if (event.timeStamp < timestamp) {
          return event;
        }
      });
    }
  }, {
    key: "sortEventsByIndex",
    value: function sortEventsByIndex(events) {
      return events.sort(function (a, b) {
        if (a.index > b.index) {
          return -1;
        }

        if (a.index < b.index) {
          return 1;
        }

        return 0;
      });
    }
  }]);

  return Condition;
})();

exports["default"] = Condition;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Hold = (function (_Condition) {
  _inherits(Hold, _Condition);

  function Hold() {
    _classCallCheck(this, Hold);

    _get(Object.getPrototypeOf(Hold.prototype), 'constructor', this).apply(this, arguments);
  }

  return Hold;
})(_condition2['default']);

exports['default'] = Hold;
module.exports = exports['default'];

},{"../condition":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Holding = (function (_Condition) {
  _inherits(Holding, _Condition);

  function Holding(inputName, condition) {
    _classCallCheck(this, Holding);

    _get(Object.getPrototypeOf(Holding.prototype), 'constructor', this).call(this);

    this.inputName = inputName;
    this.condition = condition;
  }

  _createClass(Holding, [{
    key: 'evaluate',
    value: function evaluate(events) {
      this.isValid = false;

      var holdEvents = this.getEvents(events);

      this.condition.evaluate(events);

      if (holdEvents.length && this.condition.matchedEvents.length && this.condition.firstEvent.timeStamp > holdEvents[0].timeStamp) {
        this.firstEvent = holdEvents[0];
        this.lastEvent = this.condition.lastEvent;
        this.matchedEvents = holdEvents + conditionEvents;
        this.isValid = true;
      }

      return this.isValid;
    }
  }, {
    key: 'getEvents',
    value: function getEvents(events) {
      var _this = this;

      var holdEvents = [];

      events.some(function (event, index) {
        if (event.inputName === _this.inputName && event.action === 'up') {
          return true;
        }

        if (event.inputName === _this.inputName && event.action === 'down') {
          holdEvents.push(event);
        }

        return false;
      });

      return holdEvents;
    }
  }]);

  return Holding;
})(_condition2['default']);

exports['default'] = Holding;
module.exports = exports['default'];

},{"../condition":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Keydown = (function (_Condition) {
  _inherits(Keydown, _Condition);

  function Keydown(inputName, callback) {
    _classCallCheck(this, Keydown);

    _get(Object.getPrototypeOf(Keydown.prototype), 'constructor', this).call(this);

    this.inputName = inputName;
    this.callback = callback;
  }

  _createClass(Keydown, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var event = undefined;

      this.matchedEvents = [];

      if (events[0].inputName === this.inputName && events[0].type === 'keydown') {
        event = events[0];
      }

      if (event && !event.repeat) {
        this.matchedEvents.push(event);

        if (this.callback) {
          this.callback(this.matchedEvents);
        }
      }

      return this.matchedEvents.length;
    }
  }]);

  return Keydown;
})(_condition2['default']);

exports['default'] = Keydown;
module.exports = exports['default'];

},{"../condition":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Keyup = (function (_Condition) {
  _inherits(Keyup, _Condition);

  function Keyup(inputName, callback) {
    _classCallCheck(this, Keyup);

    _get(Object.getPrototypeOf(Keyup.prototype), 'constructor', this).call(this);

    this.inputName = inputName;
    this.callback = callback;
  }

  _createClass(Keyup, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var event = undefined;

      this.matchedEvents = [];

      if (events[0].inputName === this.inputName && events[0].type === 'keyup') {
        event = events[0];
      }

      if (event) {
        this.matchedEvents.push(event);

        if (this.callback) {
          this.callback(this.matchedEvents);
        }
      }

      return this.matchedEvents.length;
    }
  }]);

  return Keyup;
})(_condition2['default']);

exports['default'] = Keyup;
module.exports = exports['default'];

},{"../condition":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Sequence = (function (_Condition) {
  _inherits(Sequence, _Condition);

  function Sequence(conditions, callback, options) {
    _classCallCheck(this, Sequence);

    _get(Object.getPrototypeOf(Sequence.prototype), 'constructor', this).call(this);

    this.conditions = conditions;

    if (this.isPlainObject(callback) && options == null) {
      this.callback = null;
      this.options = callback || {};
    } else {
      this.callback = callback;
      this.options = options || {};
    }

    this.currentIndex = 0;
    this.matchedEvents = [];
    this.firstEvent = null;
  }

  _createClass(Sequence, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var condition = undefined;

      if (this.isValid) {
        this.reset();
      }

      condition = this.conditions[this.currentIndex];

      if (condition.evaluate(events)) {
        if (this.currentIndex === 0) {
          this.firstEvent = events[0];
        }

        if (!this.withinTimeLimit(events[0])) {
          this.reset();
          return;
        }

        this.matchedEvents.concat(condition.matchedEvents);
        this.currentIndex++;

        if (this.currentIndex === this.conditions.length) {
          if (this.callback) {
            this.callback(this.matchedEvents);
          }

          this.isValid = true;
        }
      } else {
        if (condition.constructor.name === 'Keydown' && events[0].type === 'keyup') {
          return;
        }

        if (condition.constructor.name === 'Keyup' && events[0].type === 'keydown') {
          return;
        }

        this.reset();
      }

      return this.isValid;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.isValid = false;
      this.matchedEvents = [];
      this.currentIndex = 0;
    }
  }, {
    key: 'withinTimeLimit',
    value: function withinTimeLimit(event) {
      return this.firstEvent && this.options.within && event.timestamp - this.firstEvent.timestamp < this.options.within;
    }
  }, {
    key: 'isPlainObject',
    value: function isPlainObject(x) {
      return Object.prototype.toString.call(x) === '[object Object]';
    }
  }]);

  return Sequence;
})(_condition2['default']);

exports['default'] = Sequence;
module.exports = exports['default'];

},{"../condition":2}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Simultaneous = (function (_Condition) {
  _inherits(Simultaneous, _Condition);

  function Simultaneous(conditions, options) {
    _classCallCheck(this, Simultaneous);

    _get(Object.getPrototypeOf(Simultaneous.prototype), 'constructor', this).call(this);

    this.conditions = conditions;
    this.options = options || {};
  }

  _createClass(Simultaneous, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var allConditionsValid = true;
      this.matchedEvents = [];

      this.conditions.forEach(function (condition) {
        var valid = condition.evaluate(events);

        if (!valid) {
          allConditionsValid = false;
        }
      });

      console.log(this.conditions, allConditionsValid);

      if (!allConditionsValid) {
        this.isValid = false;
        return this.isValid;
      }

      var downEvents = this.getDownEvents();
      var upEvents = this.getUpEvents();

      if (downEvents.length) {
        if (this.isWithinThreshold(downEvents)) {
          this.matchedEvents.concat(downEvents);
        } else {
          this.isValid = false;
          return this.isValid;
        }
      }

      if (upEvents.length) {
        if (this.isWithinThreshold(upEvents)) {
          this.matchedEvents.concat(upEvents);
        } else {
          this.isValid = false;
          return this.isValid;
        }
      }

      this.firstEvent = downEvents[0] || upEvents[0];
      this.lastEvent = upEvents[upEvents.length - 1] || downEvents[downEvents.length - 1];
      this.isValid = true;
      return this.isValid;
    }
  }, {
    key: 'getDownEvents',
    value: function getDownEvents() {
      return this.sortEventsByIndex(this.conditions.map(function (condition) {
        console.log(condition);
        if (condition.firstEvent.action === 'down') {
          return condition.firstEvent;
        }
      }));
    }
  }, {
    key: 'getUpEvents',
    value: function getUpEvents() {
      return this.sortEventsByIndex(this.conditions.map(function (condition) {
        if (condition.lastEvent.action === 'up') {
          return condition.lastEvent;
        }
      }));
    }
  }, {
    key: 'sortEventsByIndex',
    value: function sortEventsByIndex(events) {
      events.sort(function (a, b) {
        if (a.index > b.index) {
          return -1;
        }

        if (a.index < b.index) {
          return 1;
        }

        return 0;
      });
    }
  }, {
    key: 'isWithinThreshold',
    value: function isWithinThreshold(events) {
      return Math.abs(events[events.length - 1] - events[0].timeStamp) <= this.options.threshold;
    }
  }]);

  return Simultaneous;
})(_condition2['default']);

exports['default'] = Simultaneous;
module.exports = exports['default'];

},{"../condition":2}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Wait = (function (_Condition) {
  _inherits(Wait, _Condition);

  function Wait() {
    _classCallCheck(this, Wait);

    _get(Object.getPrototypeOf(Wait.prototype), 'constructor', this).apply(this, arguments);
  }

  return Wait;
})(_condition2['default']);

exports['default'] = Wait;
module.exports = exports['default'];

},{"../condition":2}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _keysJson = require('../keys.json');

var _keysJson2 = _interopRequireDefault(_keysJson);

var History = (function () {
  function History(events) {
    _classCallCheck(this, History);

    this.events = events || [];
    this.eventCounter = 0;
  }

  _createClass(History, [{
    key: 'record',
    value: function record(event) {
      event.index = this.eventCounter;

      if (this.eventCounter > 99) {
        this.events.pop();
      }

      this.events.unshift(event);

      this.eventCounter++;

      return event;
    }
  }]);

  return History;
})();

exports['default'] = History;
module.exports = exports['default'];

},{"../keys.json":1}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libHistory = require('./lib/history');

var _libHistory2 = _interopRequireDefault(_libHistory);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _libConditionsSequence = require('./lib/conditions/sequence');

var _libConditionsSequence2 = _interopRequireDefault(_libConditionsSequence);

var _libConditionsKeydown = require('./lib/conditions/keydown');

var _libConditionsKeydown2 = _interopRequireDefault(_libConditionsKeydown);

var _libConditionsKeyup = require('./lib/conditions/keyup');

var _libConditionsKeyup2 = _interopRequireDefault(_libConditionsKeyup);

var _libConditionsHold = require('./lib/conditions/hold');

var _libConditionsHold2 = _interopRequireDefault(_libConditionsHold);

var _libConditionsHolding = require('./lib/conditions/holding');

var _libConditionsHolding2 = _interopRequireDefault(_libConditionsHolding);

var _libConditionsSimultaneous = require('./lib/conditions/simultaneous');

var _libConditionsSimultaneous2 = _interopRequireDefault(_libConditionsSimultaneous);

var _libConditionsWait = require('./lib/conditions/wait');

var _libConditionsWait2 = _interopRequireDefault(_libConditionsWait);

var InputManager = (function () {
  function InputManager() {
    _classCallCheck(this, InputManager);

    this.conditions = [];
    this.history = new _libHistory2['default']();

    this.bindEvents();
  }

  _createClass(InputManager, [{
    key: 'evaluateConditions',
    value: function evaluateConditions() {
      var _this = this;

      this.conditions.forEach(function (condition) {
        condition.evaluate(_this.history.events);
      });
    }
  }, {
    key: 'register',
    value: function register(condition) {
      this.conditions.push(condition);

      return condition;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this2 = this;

      window.addEventListener('keydown', function (event) {
        var keyName = (0, _keycode2['default'])(event);

        _this2.history.record({
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          inputName: keyName,
          inputNumber: (0, _keycode2['default'])(keyName),
          metaKey: event.metaKey,
          repeat: event.repeat,
          shiftKey: event.shiftKey,
          timestamp: new Date(event.timeStamp),
          type: event.type
        });

        _this2.evaluateConditions();
      });

      window.addEventListener('keyup', function (event) {
        var keyName = (0, _keycode2['default'])(event);

        _this2.history.record({
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          inputName: keyName,
          inputNumber: (0, _keycode2['default'])(keyName),
          metaKey: event.metaKey,
          repeat: event.repeat,
          shiftKey: event.shiftKey,
          timestamp: new Date(event.timeStamp),
          type: event.type
        });

        _this2.evaluateConditions();
      });

      // window.addEventListener('mousedown', (event) => {
      //   let eventAttrs = {
      //     altKey: event.altKey,
      //     ctrlKey: event.ctrlKey,
      //     inputName: 'MOUSE' + event.button,
      //     metaKey: event.metaKey,
      //     shiftKey: event.shiftKey,
      //     timeStamp: new Date(event.timeStamp),
      //     x: event.x,
      //     y: event.y,
      //     type: event.type,
      //     action: 'down'
      //   };

      //   if (event.target && event.target.tagName === 'CANVAS') {
      //     eventAttrs.canvasX = event.offsetX;
      //     eventAttrs.canvasY = event.offsetY;
      //   }

      //   this.history.record(eventAttrs);

      //   this.evaluateSubscribers();
      // });

      // window.addEventListener('mouseup', (event) => {
      //   let eventAttrs = {
      //     altKey: event.altKey,
      //     ctrlKey: event.ctrlKey,
      //     inputName: 'MOUSE' + event.button,
      //     metaKey: event.metaKey,
      //     shiftKey: event.shiftKey,
      //     timeStamp: new Date(event.timeStamp),
      //     x: event.x,
      //     y: event.y,
      //     type: event.type,
      //     action: 'up'
      //   };

      //   if (event.target && event.target.tagName === 'CANVAS') {
      //     eventAttrs.canvasX = event.offsetX;
      //     eventAttrs.canvasY = event.offsetY;
      //   }

      //   this.history.record(eventAttrs);

      //   this.evaluateSubscribers();
      // });
    }
  }]);

  return InputManager;
})();

InputManager.conditions = {
  Sequence: _libConditionsSequence2['default'],
  Keydown: _libConditionsKeydown2['default'],
  Keyup: _libConditionsKeyup2['default'],
  Hold: _libConditionsHold2['default'],
  Holding: _libConditionsHolding2['default'],
  Simultaneous: _libConditionsSimultaneous2['default'],
  Wait: _libConditionsWait2['default']
};

exports['default'] = InputManager;
module.exports = exports['default'];

},{"./lib/conditions/hold":3,"./lib/conditions/holding":4,"./lib/conditions/keydown":5,"./lib/conditions/keyup":6,"./lib/conditions/sequence":7,"./lib/conditions/simultaneous":8,"./lib/conditions/wait":9,"./lib/history":10,"keycode":12}],12:[function(require,module,exports){
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'right click': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 33,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}

},{}]},{},[11])(11)
});