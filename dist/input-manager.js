(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.inputManager = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var History = (function () {
  function History(events) {
    _classCallCheck(this, History);

    this.events = events || [];
  }

  _createClass(History, [{
    key: "record",
    value: function record(event) {
      this.events.unshift(event);

      return event;
    }
  }, {
    key: "filter",
    value: function filter(filters) {
      filteredHistory = this.events.filter(function (event) {
        var prop = undefined;

        for (prop in filters) {
          return filters[prop] === event[prop];
        }
      });

      return new History(filteredHistory);
    }
  }]);

  return History;
})();

exports["default"] = History;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _timedEvent = require('./timed-event');

var _timedEvent2 = _interopRequireDefault(_timedEvent);

var Subscriber = (function () {
  function Subscriber() {
    _classCallCheck(this, Subscriber);
  }

  _createClass(Subscriber, [{
    key: 'constuctor',
    value: function constuctor(inputName) {
      this.inputName = inputName;
      this.conditions = [];

      return this;
    }
  }, {
    key: 'trigger',
    value: function trigger(callback) {
      this.callback = callback;

      return this;
    }
  }, {
    key: 'occurence',
    value: function occurence(count) {
      conditions.push('occurence');
    }
  }, {
    key: 'evaluate',
    value: function evaluate() {
      var i = undefined,
          conditionName = undefined;

      for (i = 0; i < this.conditions.length; i++) {
        conditionName = this.conditions[i];

        if (!this['check' + conditionName]()) {
          return false;
        }
      }

      this.callback();
    }
  }]);

  return Subscriber;
})();

exports['default'] = Subscriber;
module.exports = exports['default'];

},{"./timed-event":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimedEvent = (function () {
  function TimedEvent(subscriber, name) {
    _classCallCheck(this, TimedEvent);

    this.subscriber = subscriber;
    this.name = name;

    return this;
  }

  _createClass(TimedEvent, [{
    key: "within",
    value: function within(ms) {
      this.subscriber[this.name].timeLimit = ms;

      return this.subscriber;
    }
  }]);

  return TimedEvent;
})();

exports["default"] = TimedEvent;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libHistory = require('./lib/history');

var _libHistory2 = _interopRequireDefault(_libHistory);

var _libSubscriber = require('./lib/subscriber');

var _libSubscriber2 = _interopRequireDefault(_libSubscriber);

var _keysJson = require('./keys.json');

var _keysJson2 = _interopRequireDefault(_keysJson);

var InputManager = undefined;

function on(inputName) {
  var subscriber = new _libSubscriber2['default'](inputName);

  this.subscribers.push(subscriber);

  return subscriber;
}

function evaluateSubscribers() {
  this.subscribers.forEach(function (subscriber) {
    subscriber.evaluate();
  });
}

InputManager = {
  subscribers: [],
  history: new _libHistory2['default'](),
  on: on,
  evaluateSubscribers: evaluateSubscribers
};

window.addEventListener('keydown', function (event) {
  var keyCode = event.keyCode || event.key;

  InputManger.history.record({
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    inputName: _keysJson2['default'][keyCode],
    keyCode: event.keyCode,
    metaKey: event.metaKey,
    repeat: event.repeat,
    shiftKey: event.shiftKey,
    timeStamp: new Date(event.timestamp),
    direction: 'down'
  });
});

window.addEventListener('keyup', function (event) {
  var keyCode = event.keyCode || event.key;

  InputManger.history.record({
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    inputName: _keysJson2['default'][keyCode],
    keyCode: event.keyCode,
    metaKey: event.metaKey,
    repeat: event.repeat,
    shiftKey: event.shiftKey,
    timeStamp: new Date(event.timestamp),
    direction: 'up'
  });
});

exports['default'] = InputManager;
module.exports = exports['default'];

},{"./keys.json":1,"./lib/history":2,"./lib/subscriber":3}]},{},[5])(5)
});