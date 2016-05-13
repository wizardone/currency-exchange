let React = require('react');
let ReactDOM = require('react-dom');
let config  = require('../config.js');
import Rate from './rate.js'

class Board extends React.Component {
  constructor(){
    super();
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
      console.log(`Success ${response}`);
    }, (response) => {
      console.log(`Fail ${response}`);
    });

  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
      <div>I AM BOARD</div>
      <Rate />
      </div>
    )
  }
}
ReactDOM.render(<Board/>, document.getElementById('body'))
