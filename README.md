# currency-exchange
A small javascript component showing currency exchange rates. Currently
there are two bases supported: `EUR` and `USD`. The component uses a
free api to deliver the rates, so they are updated on a daily basis.
To check a demo page, without any styling (it`s ugly I know, but I
really don`t like CSS) go to the installed module and run:
```javascript
npm run build_demo
```
than open `demo.html`

## Usage
Require the module:
```javascript
  let currency_board = require('currency_exchange_board')
```
or
```javascript
  import CurrencyExchangeBoard from 'currency_exchange_board'
```

To put the component in a custom html element use:
```javascript
  new CurrencyExchangeBoard('id_of_element').render();
```
