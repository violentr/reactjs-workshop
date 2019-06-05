import React, {Component, Fragment}  from 'react'
import {connect} from 'react-redux'
import {Link}  from 'react-router-dom'
import {checkoutPath} from '~/src/routes/helpers.js'

class ProductBasket extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Fragment>
        <Link to={checkoutPath()}>
          <button disabled={ this.props.totalItems == 0}>
            Basket { this.props.totalItems }
          </button>
        </Link>
        { this.props.children }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.basket.items,
    totalItems: state.basket.items.length
  }
)


export default connect(mapStateToProps)(ProductBasket)
