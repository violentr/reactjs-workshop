import React, {Component, Fragment}  from 'react'
import {connect} from 'react-redux'
import {Link}  from 'react-router-dom'
import {checkoutPath} from 'routes/helpers.js'

class ProductBasket extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {items} = this.props
    return (
      <Fragment>
        <Link to={checkoutPath()}>
          <button disabled={ items.length == 0}>
            Basket {items.length}
          </button>
        </Link>
        { this.props.children }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.basket.items
})

export default connect(mapStateToProps)(ProductBasket)
