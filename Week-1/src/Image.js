import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const Image = (props) => {
  let {title, imageUrl, width, height, alt } = props;
  return(
    <div>
      <img style={{ width, height}} src={ imageUrl }
        alt={alt ? title : alt }
      />
    </div>
  )

};

export default Image;
