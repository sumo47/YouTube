import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSlideBar/DrawerSidebar';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import CreateEditChanel from './pages/Chanel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { fetchAllChanel } from './actions/chanelUser';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllChanel())
  }, [dispatch])



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
  const toggleDrawerClose = () => {
    setToggleDrawerSidebar({
      display: "none"
    })
    setEditCreateChanelBtn(false)
  }
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)
  return (
    <Router>

      {EditCreateChanelBtn && <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />}
      <Navbar setEditCreateChanelBtn={setEditCreateChanelBtn} toggleDrawer={toggleDrawer} toggleDrawerClose={toggleDrawerClose} />
      <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} toggleDrawerClose={toggleDrawerClose} />
      <AllRoutes setEditCreateChanelBtn={setEditCreateChanelBtn} />
    </Router>

  );
}

export default App;
