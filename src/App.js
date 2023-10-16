import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
