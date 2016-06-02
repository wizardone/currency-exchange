let React = require('react');
let ReactDOM = require('react-dom');
let config  = require('../config.js');
import Rate from './rate.js'

class Board extends React.Component {
  constructor(){
    super();
    this.state = { rates: '', error: false, base: '' }
  }

  componentDidMount(){
    let promise = new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(request.statusText);
        }
      }
      request.open('GET', config.get('serverUrl'));
      request.send();

    }).then((response) => {
      let jsonResponse = JSON.parse(response);
      this.setState({ base: jsonResponse.base, rates: jsonResponse.rates });
    }, (response) => {
      this.setState({ error: true })
    });

  }

  render() {
    let rates = this.state.rates;
    return (
      <div>
        <div>Base: { this.state.base}</div>
        <div>Rates: { Object.keys(rates).map((rate, i) => {
          return (
            <Rate rate={rate} price={rates[rate]} key={i}/>
          )
        })}</div>
      </div>
    )
  }
}
ReactDOM.render(<Board/>, document.getElementById('body'))
