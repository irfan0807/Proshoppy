import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../product';

const ProductScreen = () => {
    const {id:productID} = useParams();
    const product = products.find((p) => p.id === productID);
    console.log(product);

  return (
    <div>ProductScreen</div>
  )
}

export default ProductScreen;