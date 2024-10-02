import React, { useContext } from 'react';
import { stateContext } from '../../pages/stateContext';

function ProductFilterSort() {
    const {  productsToShow, setProductsToShow } = useContext(stateContext);

    const sortProducts = (order) => {
        let sortedProducts;

        if (order === 'low-to-high') {
            sortedProducts = [...productsToShow].sort((a, b) => a.price - b.price);
        } else if (order === 'high-to-low') {
            sortedProducts = [...productsToShow].sort((a, b) => b.price - a.price);
        }

        setProductsToShow(sortedProducts);
    };

    return (
        <>
            <div className="sortingbuttons">
            <div className='filtertext'>
                Sort by
            </div>
                <button onClick={() => sortProducts('low-to-high')}>Low to High</button>
                <button onClick={() => sortProducts('high-to-low')}>High to Low</button>
            </div>
        </>
    );
}

export default ProductFilterSort;
