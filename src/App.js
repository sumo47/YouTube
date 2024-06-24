import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSlideBar/DrawerSidebar';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import CreateEditChanel from './pages/Chanel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { fetchAllChanel } from './actions/chanelUser';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAllLikedVideo } from './actions/likedVideo.js';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllChanel())
    dispatch(getAllVideo())
    dispatch(getAllLikedVideo())
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
  const [vidUploadPage, setVidUploadPage] = useState(false)
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)
  return (
    <Router>

      {vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage} />}
      {EditCreateChanelBtn && <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />}

      <Navbar setEditCreateChanelBtn={setEditCreateChanelBtn} toggleDrawer={toggleDrawer} toggleDrawerClose={toggleDrawerClose} />
      <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} toggleDrawerClose={toggleDrawerClose} />

      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn} />

    </Router>

  );
}

export default App;
