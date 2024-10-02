import React from 'react';
import logo from '../../assets/searchicon.svg';
import '../styles/componentStyles.css';

function ProductSearchInput({placeholder , activeClass , onSearchChange}) {

  return (
    <>
  
    <div className={activeClass} >
        <input type='search' onChange={(val)=>onSearchChange(val.target.value)}  placeholder={placeholder}/>
        <img src={logo} alt="Search" width={'30px'}/>
    </div>
    </>
  )
}

export default ProductSearchInput;