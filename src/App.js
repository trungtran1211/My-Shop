
import { Route, Router, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css';
import Containerbody from './Container';
import ProductCategory from './Container/ProductCategory/ProductCategory.jsx';
import ProductSearch from './Header/Header-wrapper/ProductSearch';
import Header from './Header/Header'
import ProductDetails from './Container/Products/ProductDetails';
import { LinearProgress, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  let loadingTimer;
  const handleRouteChange = () => {
    setIsLoading(true);
    loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    handleRouteChange();
    return () => {
      clearTimeout(loadingTimer);
    };
  }, [location]);

  return (
    
    <div className="App" >
      {isLoading && <LinearProgress color='secondary'/>}
      <Header/>
      <Routes>
        <Route path="/" element={<Containerbody/>} />
        <Route path="/category/:id" element={<ProductCategory/>} />
        <Route path="/search" element={<ProductSearch/>} />
        <Route path="/detail/:id" element={<ProductDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;
