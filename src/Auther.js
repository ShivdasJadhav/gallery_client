import Login from './Auth/Login';
import Signup from './Auth/signup';
import './auth.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

function Auther() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/user/*' element={<App />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default Auther;
