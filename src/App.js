import { useState } from 'react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSlideBar/DrawerSidebar';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import CreateEditChanel from './pages/Chanel/CreateEditChanel';

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({ display: "none" })

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex"
      })
    } else {
      setToggleDrawerSidebar({
        display: "none"
      })
    }
  }
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)
  return (
    <Router>

      {EditCreateChanelBtn && <CreateEditChanel  setEditCreateChanelBtn={setEditCreateChanelBtn}/>}
      <Navbar setEditCreateChanelBtn={setEditCreateChanelBtn} toggleDrawer={toggleDrawer} />
      <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
      <AllRoutes />
    </Router>

  );
}

export default App;
