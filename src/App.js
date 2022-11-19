import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='App'>
      <Router>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services'/>
          <Route path='/products'/>
          <Route path='/sign-up'/>
        </Routes>  
      </Router>
    </div>

    </>
  );
}

export default App;
