import React from "react";
import CartIcon from '/Users/williamanderson/Desktop/Github-Repo/product-previw-card-component/ppcc/src/images/icon-cart.svg';


const Addtocart = () => {
  return (
    <div className="button">
        <button type="button" className="btn btn-success icon-link">
          <img src={CartIcon} alt="Cart Icon" className="bi" />
          Add to Cart
        </button>
    </div>
  );
};

export default Addtocart;