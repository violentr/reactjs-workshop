import React, { Component, Fragment } from 'react'
import { image_attributes } from '~/src/shared/helper.js'

class Gallery extends Component{
  constructor(props){
    super(props)
  }

  renderImage(imageUrl, opt){
    let options = {height: 80, width: 80, border: "1px solid black", margin: 5}
    return(
      <span>
        <img src={imageUrl} style={options}/>
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
