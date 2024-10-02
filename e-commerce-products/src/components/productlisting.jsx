import React, { useContext } from 'react'
import ProductCard from './productcard';
import {stateContext} from '../pages/stateContext.js'

function ProductListing() {
    const { productsToShow } = useContext(stateContext);
  return (
    <div className='productslistcontainer'> 
        {productsToShow.length > 0 ? productsToShow.map(card => <ProductCard cardInfo = {card} /> ) : 'No products to show'}
        
    </div>

  )
}

export default ProductListing;