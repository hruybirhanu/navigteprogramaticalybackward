import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import './App.css';
import Ordersummery from './components/Ordersummery';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='ordersummery' element={<Ordersummery></Ordersummery>}></Route>
    </Routes>
    </>
  );
}
export default App;
                  