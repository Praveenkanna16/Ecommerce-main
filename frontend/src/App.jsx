import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import Home from './pages/Home'; 
import SignUp from './Components/Singup';
import { ProductForm } from './Components/ProductForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productform" element={<ProductForm/>} />
      </Routes>
    </>
  );
}

export default App;