import CurrencyExchangeBoard from '../js/components/exchange_board.js'
import expect from 'expect.js'

describe('CurrencyExchangeBoard', function() {
  describe('#constructor()', function() {
    it('returns the proper constructor', function() {
      let exchangeBoard = new CurrencyExchangeBoard('body')
      expect(exchangeBoard.constructor).to.be.a('function')
    })

    it('returns the proper container element', function() {
      let exchangeBoard = new CurrencyExchangeBoard('body')
      expect(exchangeBoard._container).to.eql('body')
    })
  })

  describe('#render()', function() {
    it('renders the element', function() {
      let exchangeBoard = new CurrencyExchangeBoard('body')
      expect(exchangeBoard.render).to.be.a('function')
    })
  })
})
