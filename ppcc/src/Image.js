import React from 'react';
import image from '/Users/williamanderson/Desktop/Github-Repo/product-previw-card-component/ppcc/src/images/image-product-desktop.jpg';
import '/Users/williamanderson/Desktop/Github-Repo/product-previw-card-component/ppcc/src/images/image-product-desktop.jpg';
const Image = () => {
  return (
    <div className="perfume object-fit-cover border rounded">
      <a href={image}>
        <img src={image} alt="Perfume" className="my-image-style object-fit-cover border rounded" />
      </a>
    </div>
  );
};

export default Image;