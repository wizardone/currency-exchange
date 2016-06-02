var React = require('react');

export default class Rate extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        {this.props.rate} : {this.props.price}
      </div>
    )
  }
}

Rate.propTypes = {
  price: React.PropTypes.number,
  rate: React.PropTypes.string
}
