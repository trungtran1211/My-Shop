
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Containerbody from './Container';
import ProductCategory from './Container/ProductCategory/ProductCategory.jsx';
import ProductSearch from './Header/Header-wrapper/ProductSearch';
import Header from './Header/Header'
import ProductDetails from './Container/Products/ProductDetails';

function App() {
  return (
    
    <div className="App">
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
