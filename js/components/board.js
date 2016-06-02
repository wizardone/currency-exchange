let React = require('react');
let ReactDOM = require('react-dom');
let config  = require('../config.js');
import Rate from './rate.js'

class Board extends React.Component {
  constructor(){
    super();
    this.state = { rates: '', error: false, base: '' }
  }

  componentWillMount(){
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
      console.log(jsonResponse.base);
      console.log(jsonResponse.rates);
      this.setState({ base: jsonResponse.base, rates: jsonResponse.rates });
    }, (response) => {
      this.setState({ error: true })
    });

  }

  componentDidMount(){

  }

  render() {
    return (
      <div>
      <p>Base: { this.state.base}</p>
      <p>Rates: { this.state.rates }</p>
      </div>
    )
  }
}
ReactDOM.render(<Board/>, document.getElementById('body'))
