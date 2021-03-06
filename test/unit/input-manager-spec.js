import EventFactory from './event-factory';
import InputManager from '../../main';
import Subscriber from '../../lib/subscriber';
import History from '../../lib/history';
import keys from '../../keys.json';

describe('inputManager', () => {
  let inputManager;

  beforeEach(() => {
    inputManager = new InputManager();
  });

  describe('#constuctor', () => {
    it('creates an empty subscribers array', () => {
      expect(inputManager.subscribers).to.be.an.instanceOf(Array);
      expect(inputManager.subscribers.length).to.equal(0);
    });

    it('creates a History instance', () => {
      expect(inputManager.history).to.be.an.instanceOf(History);
    });
  });

  describe('#down', () => {
    it('creates a new Subscriber, and returns it', () => {
      let subscriber = inputManager.down('X');

      expect(subscriber).to.be.an.instanceOf(Subscriber);
    });

    it('creates a new Subscriber, and adds it to its subscribers array', () => {
      let subscriber;

      inputManager.down('Y');

      subscriber = inputManager.subscribers[0];

      expect(subscriber).to.be.an.instanceOf(Subscriber);
    });
  });

  describe('#bindEvents', () => {
    it('binds an event to keydown that records the event', () => {
      let event;

      sinon.spy(inputManager.history, 'record');

      event = EventFactory.keyDown('13');

      expect(inputManager.history.record).to.have.been.calledWith({
        altKey: sinon.match.falsy,
        ctrlKey: sinon.match.falsy,
        inputName: keys[event.keyCode],
        inputAlias: event.keyCode,
        metaKey: sinon.match.falsy,
        repeat: sinon.match.falsy,
        shiftKey: sinon.match.falsy,
        timeStamp: sinon.match.date,
        action: 'down'
      });
    });

    it('binds an event to keyup that records the event', () => {
      let event;

      sinon.spy(inputManager.history, 'record');

      event = EventFactory.keyUp('13');

      expect(inputManager.history.record).to.have.been.calledWith({
        altKey: sinon.match.falsy,
        ctrlKey: sinon.match.falsy,
        inputName: keys[event.keyCode],
        inputAlias: event.keyCode,
        metaKey: sinon.match.falsy,
        repeat: sinon.match.falsy,
        shiftKey: sinon.match.falsy,
        timeStamp: sinon.match.date,
        action: 'up'
      });
    });

    it('binds an event to mousedown that records the event', () => {
      let event;

      sinon.spy(inputManager.history, 'record');

      event = EventFactory.mouseDown();

      expect(inputManager.history.record).to.have.been.calledWith({
        altKey: sinon.match.falsy,
        ctrlKey: sinon.match.falsy,
        inputName: 'MOUSE0',
        metaKey: sinon.match.falsy,
        repeat: sinon.match.falsy,
        shiftKey: sinon.match.falsy,
        timeStamp: sinon.match.date,
        x: sinon.match.integer,
        y: sinon.match.integer,
        action: 'down'
      });
    });

    it('binds an event to mouseup that records the event', () => {
      let event;

      sinon.spy(inputManager.history, 'record');

      event = EventFactory.mouseUp();

      expect(inputManager.history.record).to.have.been.calledWith({
        altKey: sinon.match.falsy,
        ctrlKey: sinon.match.falsy,
        inputName: 'MOUSE0',
        metaKey: sinon.match.falsy,
        repeat: sinon.match.falsy,
        shiftKey: sinon.match.falsy,
        timeStamp: sinon.match.date,
        x: sinon.match.integer,
        y: sinon.match.integer,
        action: 'up'
      });
    });

    xit('adds the offset of the click on the canvas if the click happens on a canvas', () => {
      let event, canvas;

      sinon.spy(inputManager.history, 'record');

      canvas = document.createElement('canvas');
      event = EventFactory.mouseDown(canvas, {
        x: 10,
        y: 10
      });

      expect(inputManager.history.record).to.have.been.calledWith({
        altKey: sinon.match.falsy,
        ctrlKey: sinon.match.falsy,
        inputName: 'MOUSE0',
        metaKey: sinon.match.falsy,
        repeat: sinon.match.falsy,
        shiftKey: sinon.match.falsy,
        timeStamp: sinon.match.date,
        x: sinon.match.integer,
        y: sinon.match.integer,
        canvasX: 10,
        canvasY: 10,
        action: 'down'
      });
    });
  });
});
