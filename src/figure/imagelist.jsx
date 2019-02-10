import React from "react";

const ImageList = props => {
  return (
    <div>
      found: {props.images.length} images.
      {props.images.map(pics => (
      <div key={pics.id} className="pic-view" >
        <img className="image" alt={pics.slug} src={pics.urls.regular} />
      </div>
        ) )}      
    </div>
    );
};
export default ImageList;