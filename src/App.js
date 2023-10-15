import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
