import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  let user = JSON.parse(localStorage.getItem("user-info"));
  return (
    <div className='product-styling'>
      
          <img className="small" src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div>${product.price}</div>
          <div>
          { 
            user ?
            <button onClick={() => onAdd(product)}>Add To Cart</button>
            :
            <h2 className='login-to-buy'>Log in to Buy</h2>
          }
          </div>
      
    </div>
  );
}
