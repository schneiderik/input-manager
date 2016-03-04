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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Down = (function (_Condition) {
  _inherits(Down, _Condition);

  function Down(inputName) {
    _classCallCheck(this, Down);

    _get(Object.getPrototypeOf(Down.prototype), 'constructor', this).call(this);

    this.inputName = inputName;
  }

  _createClass(Down, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var _this = this;

      this.matchedEvents = [];
      this.isValid = false;

      var event = events.find(function (event, index) {
        if (event.inputName === _this.inputName && event.action === 'down') {
          return event;
        }
      });

      if (event) {
        this.firstEvent = event;
        this.lastEvent = event;
        this.matchedEvents.push(event);
        this.isValid = true;
      }

      return this.isValid;
    }
  }]);

  return Down;
})(_condition2['default']);

exports['default'] = Down;
module.exports = exports['default'];

},{"../condition":2}],4:[function(require,module,exports){
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

var Press = (function (_Condition) {
  _inherits(Press, _Condition);

  function Press(inputName) {
    _classCallCheck(this, Press);

    _get(Object.getPrototypeOf(Press.prototype), 'constructor', this).call(this);

    this.inputName = inputName;
  }

  _createClass(Press, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var pressEvents = this.getEvents(events);

      if (pressEvents.up && pressEvents.down) {
        this.firstEvent = pressEvents.down;
        this.lastEvent = pressEvents.up;
        this.matchedEvents = [pressEvents.down, pressEvents.up];
        this.isValid = true;
      } else {
        this.isValid = false;
      }

      return this.isValid;
    }
  }, {
    key: 'getEvents',
    value: function getEvents(events) {
      var _this = this;

      var upIndex = undefined,
          scopedEvents = undefined;
      var pressEvents = {};

      if (events[0].inputName === this.inputName && events[0].action === 'up') {
        pressEvents.up = events[0];
      }

      if (!pressEvents.up) {
        return pressEvents;
      }

      scopedEvents = this.getEventsBefore(events, pressEvents.up.timeStamp);

      pressEvents.down = scopedEvents.find(function (event) {
        if (event.inputName === _this.inputName && event.action === 'down') {
          return event;
        }
      });

      return pressEvents;
    }
  }]);

  return Press;
})(_condition2['default']);

exports['default'] = Press;
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

  function Sequence(conditions, options) {
    _classCallCheck(this, Sequence);

    _get(Object.getPrototypeOf(Sequence.prototype), 'constructor', this).call(this);

    this.conditions = conditions.reverse();
    this.options = options || {};
  }

  _createClass(Sequence, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var i = 0;

      this.matchedEvents = [];

      function checkConditionInSequence(condition, e) {
        if (condition.evaluate(e)) {
          this.matchedEvents.concat(condition.matchedEvents);

          if (i === 0) {
            this.lastEvent = condition.lastEvent;
          }

          i++;

          if (i === this.conditions.length) {
            this.firstEvent = condition.firstEvent;

            // Check that sequence was performed within time limit
            if (this.options.within && this.lastEvent.timeStamp - this.firstEvent.timeStamp > this.options.within) {
              this.isValid = false;
              return;
            }

            this.isValid = true;
          } else {
            checkConditionInSequence.call(this, this.conditions[i], this.getEventsBefore(e, condition.firstEvent.timeStamp));
          }
        } else {
          this.isValid = false;
          return;
        }
      }

      checkConditionInSequence.call(this, this.conditions[i], events);

      console.log('SEQUENCE VALID', this.isValid);

      return this.isValid;
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _condition = require('../condition');

var _condition2 = _interopRequireDefault(_condition);

var Up = (function (_Condition) {
  _inherits(Up, _Condition);

  function Up(inputName) {
    _classCallCheck(this, Up);

    _get(Object.getPrototypeOf(Up.prototype), 'constructor', this).call(this);

    this.inputName = inputName;
  }

  _createClass(Up, [{
    key: 'evaluate',
    value: function evaluate(events) {
      var _this = this;

      this.matchedEvents = [];
      this.isValid = false;

      var event = events.find(function (event, index) {
        if (event.inputName === _this.inputName && event.action === 'up') {
          return event;
        }
      });

      if (event) {
        this.firstEvent = event;
        this.lastEvent = event;
        this.matchedEvents.push(event);
        this.isValid = true;
      }

      return this.isValid;
    }
  }]);

  return Up;
})(_condition2['default']);

exports['default'] = Up;
module.exports = exports['default'];

},{"../condition":2}],10:[function(require,module,exports){
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

},{"../condition":2}],11:[function(require,module,exports){
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

},{"../keys.json":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Subscriber = (function () {
  function Subscriber(condition, callback) {
    _classCallCheck(this, Subscriber);

    this.condition = condition;
    this.callback = callback;
  }

  _createClass(Subscriber, [{
    key: 'evaluate',
    value: function evaluate(events) {
      if (this.condition.evaluate(events)) {
        console.log('SUBSCRIBER VALID', this.condition.isValid);

        this.callback(this.sortEventsByIndex(this.condition.matchedEvents));
      }
    }
  }, {
    key: 'sortEventsByIndex',
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

  return Subscriber;
})();

exports['default'] = Subscriber;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libHistory = require('./lib/history');

var _libHistory2 = _interopRequireDefault(_libHistory);

var _libSubscriber = require('./lib/subscriber');

var _libSubscriber2 = _interopRequireDefault(_libSubscriber);

var _keysJson = require('./keys.json');

var _keysJson2 = _interopRequireDefault(_keysJson);

var _libConditionsSequence = require('./lib/conditions/sequence');

var _libConditionsSequence2 = _interopRequireDefault(_libConditionsSequence);

var _libConditionsDown = require('./lib/conditions/down');

var _libConditionsDown2 = _interopRequireDefault(_libConditionsDown);

var _libConditionsUp = require('./lib/conditions/up');

var _libConditionsUp2 = _interopRequireDefault(_libConditionsUp);

var _libConditionsPress = require('./lib/conditions/press');

var _libConditionsPress2 = _interopRequireDefault(_libConditionsPress);

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

    this.Subscriber = _libSubscriber2['default'];
    this.subscribers = [];
    this.history = new _libHistory2['default']();

    this.bindEvents();
  }

  _createClass(InputManager, [{
    key: 'evaluateSubscribers',
    value: function evaluateSubscribers() {
      var _this = this;

      this.subscribers.forEach(function (subscriber) {
        subscriber.evaluate(_this.history.events);
      });
    }
  }, {
    key: 'createSubscriber',
    value: function createSubscriber(condition, callback) {
      var subscriber = new _libSubscriber2['default'](condition, callback);

      this.subscribers.push(subscriber);

      return subscriber;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this2 = this;

      window.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode || event.key;

        _this2.history.record({
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          inputName: _keysJson2['default'][keyCode],
          inputAlias: keyCode,
          metaKey: event.metaKey,
          repeat: event.repeat,
          shiftKey: event.shiftKey,
          timeStamp: new Date(event.timeStamp),
          type: event.type,
          action: 'down'
        });

        _this2.evaluateSubscribers();
      });

      window.addEventListener('keyup', function (event) {
        var keyCode = event.keyCode || event.key;

        _this2.history.record({
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          inputName: _keysJson2['default'][keyCode],
          inputAlias: keyCode,
          metaKey: event.metaKey,
          repeat: event.repeat,
          shiftKey: event.shiftKey,
          timeStamp: new Date(event.timeStamp),
          type: event.type,
          action: 'up'
        });

        _this2.evaluateSubscribers();
      });

      window.addEventListener('mousedown', function (event) {
        var eventAttrs = {
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          inputName: 'MOUSE' + event.button,
          metaKey: event.metaKey,
          shiftKey: event.shiftKey,
          timeStamp: new Date(event.timeStamp),
          x: event.x,
          y: event.y,
          type: event.type,
          action: 'down'
        };

        if (event.target && event.target.tagName === 'CANVAS') {
          eventAttrs.canvasX = event.offsetX;
          eventAttrs.canvasY = event.offsetY;
        }

        _this2.history.record(eventAttrs);

        _this2.evaluateSubscribers();
      });

      window.addEventListener('mouseup', function (event) {
        var eventAttrs = {
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          inputName: 'MOUSE' + event.button,
          metaKey: event.metaKey,
          shiftKey: event.shiftKey,
          timeStamp: new Date(event.timeStamp),
          x: event.x,
          y: event.y,
          type: event.type,
          action: 'up'
        };

        if (event.target && event.target.tagName === 'CANVAS') {
          eventAttrs.canvasX = event.offsetX;
          eventAttrs.canvasY = event.offsetY;
        }

        _this2.history.record(eventAttrs);

        _this2.evaluateSubscribers();
      });
    }
  }]);

  return InputManager;
})();

InputManager.conditions = {
  Sequence: _libConditionsSequence2['default'],
  Down: _libConditionsDown2['default'],
  Up: _libConditionsUp2['default'],
  Press: _libConditionsPress2['default'],
  Hold: _libConditionsHold2['default'],
  Holding: _libConditionsHolding2['default'],
  Simultaneous: _libConditionsSimultaneous2['default'],
  Wait: _libConditionsWait2['default']
};

exports['default'] = InputManager;
module.exports = exports['default'];

},{"./keys.json":1,"./lib/conditions/down":3,"./lib/conditions/hold":4,"./lib/conditions/holding":5,"./lib/conditions/press":6,"./lib/conditions/sequence":7,"./lib/conditions/simultaneous":8,"./lib/conditions/up":9,"./lib/conditions/wait":10,"./lib/history":11,"./lib/subscriber":12}]},{},[13])(13)
});