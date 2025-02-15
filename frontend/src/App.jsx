import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import Home from './pages/Home'; 
import SignUp from './Components/Singup';
import { ProductForm } from './Components/ProductForm';
// import { ProductCardSeller } from './Components/ProductCardSeller';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productform" element={<ProductForm/>} />
        {/* <Route path='/my-product' element={<ProductCardSeller/>}/> */}

      </Routes>
    </>
  );
}

export default App;