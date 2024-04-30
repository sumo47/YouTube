import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
       <Navbar/>
       <AllRoutes/>
    </Router>

  );
}

export default App;
