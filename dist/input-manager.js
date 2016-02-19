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
      this.events.unshift(event);

      this.eventCounter++;

      return event;
    }
  }]);

  return History;
})();

exports['default'] = History;
module.exports = exports['default'];

},{"../keys.json":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subscriber = (function () {
  function Subscriber(condition, callback) {
    _classCallCheck(this, Subscriber);

    this.condition = condition;
    this.callback = callback;
  }

  _createClass(Subscriber, [{
    key: "evaluate",
    value: function evaluate() {
      var matchedEvents = this.condition.evaluate();

      matchedEvents = this.sortEventByIndex(matchedEvents);

      if (this.condition.isValid) {
        this.callback(matchedEvents);
      }
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

  return Subscriber;
})();

exports["default"] = Subscriber;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
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
      this.subscribers.forEach(function (subscriber) {
        subscriber.evaluate();
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
      var _this = this;

      window.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode || event.key;

        _this.history.record({
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

        _this.evaluateSubscribers();
      });

      window.addEventListener('keyup', function (event) {
        var keyCode = event.keyCode || event.key;

        _this.history.record({
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

        _this.evaluateSubscribers();
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

        _this.history.record(eventAttrs);

        _this.evaluateSubscribers();
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

        _this.history.record(eventAttrs);

        _this.evaluateSubscribers();
      });
    }
  }]);

  return InputManager;
})();

exports['default'] = InputManager;
module.exports = exports['default'];

},{"./keys.json":1,"./lib/history":2,"./lib/subscriber":3}]},{},[4])(4)
});