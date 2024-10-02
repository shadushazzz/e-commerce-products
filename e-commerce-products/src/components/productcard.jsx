import React, { useState } from 'react';
import star from '../assets/starrating.png';

function ProductCard({ cardInfo }) {

    const [isClicked ,setIsClicked] =  useState(false)
    return (
        <div className='cardinfo' key={cardInfo.id}>

           <div className='carditems'>
            <div className='cardImage'>
                <img src={cardInfo.image} width={'180px'} height={'220px'} alt={cardInfo.title}/>
            </div>
            <div className='cardtitle'>
                {cardInfo.title}
            </div>
            <div className='cardrating'>
                <div>
                    <img src={star} width={'20px'} height={'20px'} alt={'rating'}/>
                </div>
                <div>
                    {cardInfo?.rating?.rate}
                </div>
                <div>
                    ({cardInfo?.rating?.count})
                </div>
            </div>
            <div className='cardprice'>
                <sup>$</sup>{cardInfo?.price}
            </div>
           </div>   
            <div className= {isClicked ? 'cardbuttonactive' : 'cardbuttoninactive'}>
               <button onClick={()=> setIsClicked(!isClicked)}>
                {isClicked ? 'Go To Cart' : 'Add to Cart'}
               </button>
            </div>

        </div>
    )
}

export default ProductCard