import { products } from '~/constants/Products.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const Image = (props) => {
  let {title, imageUrl, width, hight, alt } = props

  return(
    <div>
      <img style={{ width: width, height: hight}} src={ imageUrl }
        alt={alt == '' ? title : alt }
      />
      <span> { title } </span>
    </div>
  )

}

export default Image;
