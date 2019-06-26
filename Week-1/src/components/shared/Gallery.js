import React,{ Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import  'App.css'

const productImage = document.getElementById('product-image')

class Gallery extends Component{

  constructor(props){
    super(props)
    this.el = document.createElement('img');
  }

  componentDidMount(){
    productImage.appendChild(this.el)
  }

  componentWillUnmount(){
    productImage.removeChild(this.el)
  }

  handleClick(e) {
    let url = e.target.src
    if (url) {
      this.el.src = url
      this.el.className = 'big-image'
      productImage.appendChild(this.el)
    }
  }

  renderImage(imageUrl){
    let image = imageUrl && (
      <span>
        <img onClick={(e)=>this.handleClick(e)} className='thumb' src={imageUrl} />
      </span>
    )
    return image
  }
  render(){
    let {images} = this.props
    return(
      <div className='thum-images'>
        {
          images && images.map((url, i) => (
            <Fragment key={i}>
              { this.renderImage(url) }
            </Fragment>
          ))
        }
      </div>
    )
  }
}

Gallery.propTypes = {
  images: PropTypes.array
}

export default Gallery
