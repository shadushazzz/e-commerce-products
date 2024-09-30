import React from 'react';
import logo from '../assets/searchicon.svg';

function ProductSearchInput({onInputChange,placeholder}) {
  return (
    <div className='productsearch'>
        <input type='search' onChange={(val)=>onInputChange(val.target.value)}  placeholder={placeholder}/>
        <img src={logo} alt="Search" width={'30px'}/>
    </div>
  )
}

export default ProductSearchInput;