import CurrencyExchangeBoard from '../js/components/exchange_board.js';
import expect from 'expect.js';
import { mount, shallow } from 'enzyme';

describe('CurrencyExchangeBoard', function() {
  it('calls componentDidMount', () => {
    const wrapper = mount(<CurrencyExchangeBoard />);

    expect(CurrencyExchangeBoard.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
