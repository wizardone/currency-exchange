import React from 'react';
import greenArrow from '../../static/images/green_arrow.jpg';
import redArrow from '../../static/images/red_arrow.jpg';

export default class Rate extends React.Component {
  constructor(){
    super();
    this.state = { changed: false, direction: 0 }
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
    let arrowImage = null;
    if(this.state.direction == 1){
      arrowImage = greenArrow
    } else if(this.state.direction == -1) {
      arrowImage = redArrow
    }

    return (
      <img src={ arrowImage } width={15} height={15} className={'currency-exchange-direction'}/>
    )
  }

  render(){
    let { rate, price } = this.props
    return (
      <div className={"currency-exchange-rate"}>
      { rate } : { price } { this.state.changed == true ? this.rateImage() : null }
      </div>
    )
  }
}

Rate.propTypes = {
  price: React.PropTypes.number,
  rate: React.PropTypes.string
}
