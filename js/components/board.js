let React = require('react');
let ReactDOM = require('react-dom');
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
