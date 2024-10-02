import React from 'react';
import NavItems from './navitems';
import productsIconUrl from '../../assets/productsIcon.svg';
import '../styles/componentStyles.css';

function Nav() {
  return (
    <div className='nav'>
     <NavItems iconUrl={productsIconUrl} altText={'Products'} iconWidth={'40px'} productText={'Products'} isActive={true}/>
    </div>
  )
}

export default Nav;