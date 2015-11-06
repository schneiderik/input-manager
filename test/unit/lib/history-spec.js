import History from '../../../lib/history';
import HistoryEvent from '../../../lib/history-event';
import EventFactory from '../event-factory';

describe('History', () => {
  describe('#constructor', () => {
    it('creates an empty array of events', () => {
      let history = new History();

      expect(history.events).to.be.an.instanceOf(Array);
    });
  });

  describe('#record', () => {
    it('adds a HistoryEvent to the event array', () => {
      let history = new History();
      let domEvent = EventFactory.keyDown(13);
      let historyEvent = new HistoryEvent(domEvent);

      history.record(historyEvent);

      expect(history.events.length).to.equal(1);
      expect(history.events[0]).to.be.an.instanceOf(HistoryEvent);
    });

    it('throws an error if anything besides a HistoryEvent is added', () => {
      let history = new History();
      let domEvent = EventFactory.keyDown(13);

      expect(() => {
        history.record(domEvent);
      }).to.throw('Invalid argument. Must be a HistoryEvent');
    });
  });
});
