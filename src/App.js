import './App.css';
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSlideBar/DrawerSidebar';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
       <Navbar/>
       {<DrawerSidebar/>}
       <AllRoutes/>
    </Router>

  );
}

export default App;
