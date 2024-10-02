import React, { useContext } from 'react';
import './componentStyles.css';
import ProductFilterSelect from './productfilterselect';
import ProductSearchInput from './productsearchinput';
import ProductFilterSort from './productfiltersort';
import { stateContext } from '../pages/stateContext';
import { Capitalize } from '../utlis/helpers';


function ProductFilters() {


    const { productsData, setProductsToShow ,category , productsToShow } = useContext(stateContext);
    let flag=false;
    let resetData;
    if(flag) {
        resetData = productsToShow;
        flag = false;
    }

    const productSeachHandler = (val) => {
        if (val.length > 0) {
            const searchedProduct = productsToShow.filter(product => product.title.includes(val));
            searchedProduct.length === 0 ? setProductsToShow([]) : setProductsToShow(searchedProduct)
        } else {
            setProductsToShow(productsData)  
        }
    }

  return (
    <div>
    <div className='filters' >
     <div className="select">
        <ProductFilterSelect />
     </div>
     <div className="sort">
        <ProductFilterSort />
     </div>
      <div className='search'>
        <ProductSearchInput onSearchChange={(val)=> productSeachHandler(val)} placeholder={'Search by product name'} activeClass={'productfiltersearch'}/>
      </div>
    </div>
    <div className='producttitle'>
        <h1>Products</h1>
        <span>{Capitalize(category)}</span>

    </div>
    </div>
    
  )
}

export default ProductFilters;