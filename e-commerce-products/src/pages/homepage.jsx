import { React, useEffect, useState } from 'react'
import Header from '../components/header';
import Nav from '../components/nav';
import ProductFilters from '../components/productfilters';
import ProductListing from '../components/productlisting';
import { stateContext } from "./stateContext";

const HomePage = () => {

  const [productsData, setProductsData] = useState([]);
  const [productsToShow, setProductsToShow] = useState(productsData);
  const [category, setCategory] = useState('All');




  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {
          setProductsData(json);
          setProductsToShow(json)
        })
    } catch (err) {
    }
  }, []);


  return (
    <div className='container'>
      <stateContext.Provider value={{ 
        productsToShow, 
        setProductsToShow, 
        productsData, 
        setProductsData ,
        category , 
        setCategory 
      }}>
        <div className='home'>
          <Header />
          <Nav />
        </div>
        <div className='products'>
          <ProductFilters />
          <ProductListing />
        </div>
      </stateContext.Provider>
    </div>
  )
}


export default HomePage;
