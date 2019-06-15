import React, {Component, Fragment}  from 'react'
import {connect} from 'react-redux'
import {Link}  from 'react-router-dom'
import {checkoutPath} from '~/src/routes/helpers.js'

class ProductBasket extends Component {
  constructor(props){
    super(props)
  }
  totalItems() {
    let items = this.props.items.length > 0 ? this.props.items : this.props.storedItems
    return items.length
  }
  render(){
    return (
      <Fragment>
        <Link to={checkoutPath()}>
          <button disabled={ this.totalItems() == 0}>
            Basket { this.totalItems() }
          </button>
        </Link>
        { this.props.children }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.basket.items,
  storedItems: state.basket.storedItems
})

export default connect(mapStateToProps)(ProductBasket)
