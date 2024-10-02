import React, { useContext } from 'react';
import {stateContext} from '../pages/stateContext.js'
import { Capitalize } from '../utlis/helpers.js';



function ProductFilterSelect() {

const {productsData,  setProductsToShow , setCategory } = useContext(stateContext);
const category = ['All' , ...new Set(productsData.map((product) => product.category)) ];
const selectChangeHandler = (val) => {

    const selectedProduct = productsData.filter(product => product.category === val);
    (selectedProduct.length === 0 || val === 'All')  ? setProductsToShow(productsData): setProductsToShow(selectedProduct);
    setCategory(val)
}

  return (
    <div className='productfilterselect'>
      <div className='filtertext'>
        Filters
      </div>
      <select onChange={(e) => selectChangeHandler(e.target.value)}>
        {category.map((cat) => {
          return <option value={cat}>{Capitalize(cat)}</option>;
        })}
      </select>
    </div>
  )
}

export default ProductFilterSelect