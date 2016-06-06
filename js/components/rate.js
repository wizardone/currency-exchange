let React = require('react');

export default class Rate extends React.Component {
  constructor(){
    super();
    this.state = { changed: false, direction: 0}
  }

  componentWillReceiveProps(nextProps) {
    let oldPrice = this.props.price;
    let newPrice = nextProps.price;

    if(oldPrice != newPrice) {
      newPrice > oldPrice ? this.setState({ direction: 1 }) : this.setState({ direction: -1 });
      this.setState({ changed: true });
    }
  }

  rateImage() {
    let arrowPath = '';
    if(this.state.direction == 1){
      arrowPath = 'static/images/green_arrow.jpg';
    } else if(this.state.direction == -1) {
      arrowPath = 'static/images/red_arrow.jpg';
    }

    return (
      <img src={ arrowPath } width={15} height={15}/>
    )
  }

  render(){
    let { rate, price } = this.props
    return (
      <div>
      { rate } : { price } { this.state.changed == true ? this.rateImage() : null }
      </div>
    )
  }
}

Rate.propTypes = {
  price: React.PropTypes.number,
  rate: React.PropTypes.string
}
