import React from 'react';
import '../styles/componentStyles.css';

function NavItems({iconUrl, productText , altText , iconWidth ,isActive}) {
  return (
    <div className='navItemsContainer' style={{backgroundColor : (isActive ? '#011c34':'')}}>
        <div style={{color:'#fff"'}}>
        <img src={iconUrl} alt={altText} width={iconWidth}/>
        </div>
        <div>
        {productText}
        </div>
    </div>
  )
}

export default NavItems