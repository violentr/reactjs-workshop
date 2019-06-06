import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import ProductAddToBasket from '~/src/components/Product/AddToBasket.js'
import {connect} from 'react-redux'

class Catalog extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {products} = this.props
    return (
      <div>
        {
          products && products.map((product, i) => (
            <Fragment key={i}>
              <ProductCard key={product.id}
                product={product}
              />
              <ProductAddToBasket key={i} product={product} />
            </Fragment>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.entries
})

export default connect(mapStateToProps)(Catalog)
