import React, { useContext } from 'react'
import Icon from './icon';
import ProductSearchInput from './productsearchinput';
import './componentStyles.css';
import { stateContext } from '../pages/stateContext';

const Header = () => {

    const { productsData, setProductsToShow } = useContext(stateContext);
    const productSeachHandler = (val) => {
       if (val.length > 0) {
            const searchedProduct = productsData.filter(product =>product.title.toLowerCase().includes(val.toLowerCase()));
            searchedProduct.length === 0 ? setProductsToShow([]) : setProductsToShow(searchedProduct)
        } else {
            setProductsToShow(productsData)
        }
    }

    return (
        <div className='header'>
            <Icon />
            <ProductSearchInput onSearchChange={(val) => productSeachHandler(val)} placeholder={'Show products based on search'} activeClass={'productsearch'} />
        </div>
    )
}


export default Header;