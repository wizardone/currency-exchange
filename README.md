# currency-exchange
A small javascript component showing currency exchange rates. Currently
there are two bases supported: `EUR` and `USD`. The component uses a
free api to deliver the rates, so they are updated on a daily basis.
It comes bundled so all you need to do is:
If you want to see how it looks build the sample:
`cd /node_modules/currency_exchange_board`
run `npm run build_dev`
run `npm run start_dev`
## Usage
Require the module:
```javascript
  let currency_board = require('currency_exchange_board')
```
or
```javascript
  import CurrencyExchangeBoard from 'currency_exchange_board'
```
Then:
```javascript
ReactDom.render(<CurrencyExchangeBoard />, document.getElementById('currency'))
```
