import History from '../../../lib/history';
import EventFactory from '../event-factory';

describe('History', () => {
  describe('#constructor', () => {
    it('creates an empty array of events', () => {
      let history = new History();

      expect(history.events).to.be.an.instanceOf(Array);
    });
  });

  describe('#record', () => {
    it('accepts a DOM Event and adds an event object to the event array', () => {
      let history = new History();
      let domEvent = EventFactory.keyDown(13);

      history.record(domEvent);

      expect(history.events.length).to.equal(1);
    });
  });

  describe('#filter', ()=> {
    it('returns a new instance of History that contains events that matched the condition', () => {
      let filteredHistory;
      let history = new History();

      history.record(EventFactory.keyDown(88));
      history.record(EventFactory.keyDown(89));
      history.record(EventFactory.keyDown(88));

      filteredHistory = history.filter(function (event) {
        return event.inputAlias === 88;
      });

      expect(filteredHistory).to.not.equal(history);
      expect(filteredHistory).to.be.an.instanceOf(History);
      expect(history.events.length).to.equal(3);
      expect(filteredHistory.events.length).to.equal(2);
    });

    it('is chainable', () => {
      let filteredHistory;
      let history = new History();

      history.record(EventFactory.keyDown(88));
      history.record(EventFactory.keyDown(89));
      history.record(EventFactory.keyUp(88));

      filteredHistory = history.filter(function (event) {
        return event.inputAlias === 88;
      });

      expect(filteredHistory).to.not.equal(history);
      expect(filteredHistory).to.be.an.instanceOf(History);
      expect(history.events.length).to.equal(3);
      expect(filteredHistory.events.length).to.equal(2);

      filteredHistory = history.filter(function (event) {
        return event.inputAlias === 88;
      }).filter(function (event) {
        return event.action === 'up';
      });

      expect(filteredHistory.events.length).to.equal(1);
    });
  });
});
