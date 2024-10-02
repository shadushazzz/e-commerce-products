import { React, useEffect, useState } from 'react'
import Header from '../components/genericComponents/header';
import Nav from '../components/genericComponents/nav';
import ProductFilters from '../components/productComponents/productfilters';
import ProductListing from '../components/productComponents/productlisting';
import { stateContext } from "./stateContext";

const HomePage = () => {

  const [productsData, setProductsData] = useState([]);
  const [productsToShow, setProductsToShow] = useState(productsData);
  const [category, setCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);


  async function fetchProducts() {
    try {
      setIsLoading(true);
      await fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {
          setProductsData(json);
          setProductsToShow(json)
        })
        setIsLoading(false)
    } catch (err) {
    }
  }

  useEffect(() => {
   fetchProducts();
  }, []);


  return (
    <div className='container'>
      <stateContext.Provider value={{ 
        productsToShow, 
        setProductsToShow, 
        productsData, 
        setProductsData ,
        category , 
        setCategory ,
        isLoading
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
