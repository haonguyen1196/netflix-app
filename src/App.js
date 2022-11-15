import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search />}/>
          <Route />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
