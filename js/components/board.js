var React = require('react');
var ReactDOM = require('react-dom');
//var Rate = require('./rate.js');
import Rate from './rate.js'

class Board extends React.Component {
  constructor(){
    super();
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
