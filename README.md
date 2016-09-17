# currency-exchange
A small javascript component showing currency exchange rates. Currently
there are two bases supported: `EUR` and `USD`. The component uses a
free api to deliver the rates, so they are updated on a daily basis.
You can open the `index.html` to see how it looks without any styling
## Usage
To put the component in a custom html element use:
```javascript
  new CurrencyExchangeBoard('id_of_element').render();
```
