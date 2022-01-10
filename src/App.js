import './App.css';
import Dashboard from './View/Dashboard'
import { Routes, Route, Link } from "react-router-dom";
import Customers from './View/Customers';
import Product from './View/Product'
import Sidebar from './Component/Sidebar'

function App() {
  return (
    <div >
    <Routes>
      <Route path ="/" element={<Dashboard/>}/>
      <Route path ="/customer" element ={<Customers/>}/>
      <Route path="/product" element ={<Product/>}/>
    </Routes>
    </div>
  );
}

export default App;
