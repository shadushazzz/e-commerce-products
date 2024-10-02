import React, { useContext } from 'react'
import ProductCard from './productcard';
import {stateContext} from '../pages/stateContext.js'

function ProductListing() {
    const { productsToShow , isLoading } = useContext(stateContext);
  return (
    <div className='productslistcontainer'> 
       {
        isLoading ? 'Loading Products..' :  productsToShow.length > 0 ? productsToShow.map(card => <ProductCard cardInfo = {card} /> ) : 'No products to show'
       }
       
        
    </div>

  )
}

export default ProductListing;