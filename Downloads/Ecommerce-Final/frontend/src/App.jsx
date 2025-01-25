
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import './App.css'
import SignUp from './Components/Singup'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
    <Routes>
      <Route path='/signup' element={<SignUp />} />
    </Routes>
     
     
    </>
  )
}

export default App
