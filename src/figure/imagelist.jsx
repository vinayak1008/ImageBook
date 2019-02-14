import React from "react";
import './imagelist.css'

const ImageList = props => {
  return (
    <div>
      found: {props.images.length} images.
      <div className="view">
      {props.images.map(pics => (
        <div key={pics.id} className="image-view" >
          <img src={pics.urls.regular} className="card-img-top" alt={pics.slug} />
        </div>       
        ) )}   
        </div>   
    </div>
    );
};
export default ImageList;