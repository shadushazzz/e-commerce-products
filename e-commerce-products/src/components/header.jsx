import React from 'react'
import Icon from './icon';
import ProductSearchInput from './productsearchinput';

const Header = () => {
  return (
    <div className='header'>
        <Icon />
        <ProductSearchInput placeholder={'Show products based on search'} onInputChange={(val) => {console.log(val)}}/>
    </div>
  )
}


export default Header;