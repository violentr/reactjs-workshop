import React, { Component, Fragment } from 'react'
import  '~/src/css/styles.css'

class Gallery extends Component{
  constructor(props){
    super(props)
  }

  renderImage(imageUrl, opt){
    return(
      <span>
        <img className="thumb" src={imageUrl} />
      </span>
    )
  }
  render(){
    let images = this.props.images
    return(
      <div>
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
export default Gallery
