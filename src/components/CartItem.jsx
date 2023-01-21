import React from 'react';

export default function CartItem({ product }) {

  return (
    <div className='relative'>
      {product.title}
    </div>
  );
}
