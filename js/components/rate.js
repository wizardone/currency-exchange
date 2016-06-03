var React = require('react');

export default class Rate extends React.Component {
  constructor(){
    super();
  }

  render(){
    let { rate, price } = this.props
    return (
      <div>
        { rate } : { price }
      </div>
    )
  }
}

Rate.propTypes = {
  price: React.PropTypes.number,
  rate: React.PropTypes.string
}
