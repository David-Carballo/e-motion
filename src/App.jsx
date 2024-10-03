import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Favorites from './pages/Favorites'
import AddItem from './pages/AddItem'
import EditItem from './pages/EditItem'
import ItemDetail from './pages/ItemDetail'
import Mood from './pages/Mood'
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import axios from 'axios'
import clipImg from './assets/clip.png'

function App() {

  const [colorTheme, setColorTheme] = useState("dark");

  const [showMessage, setShowMessage] = useState(false);
  const [allMessages, setAllMessages] = useState(null);
  const [clipMessage, setClipMessage] = useState("...");

  useEffect(()=>{
    getMessages();
  }
  , [])

  const getMessages = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/sentences`)
      console.log(response.data);
      setAllMessages(response.data);
    } 
    catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    if(!showMessage){
      let randomMsg = Math.floor(Math.random() * allMessages.length);
      console.log(allMessages[randomMsg])
      setClipMessage(allMessages[randomMsg].mesagge);
      setShowMessage(true);
      let timer = setTimeout(()=>{
        setShowMessage(false);
        clearTimeout(timer);
      }, 3000)
    }
  }

  return (
    <div id="app" className={`${colorTheme}-theme`}>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Dashboard setColorTheme={setColorTheme}/>} />
        <Route path={"/about"} element={<About setColorTheme={setColorTheme}/>} />
        <Route path={"/favorites"} element={<Favorites setColorTheme={setColorTheme}/>} />
        <Route path={"/add-item"} element={<AddItem setColorTheme={setColorTheme}/>} />
        <Route path={"/edit-item/:itemId"} element={<EditItem />}/>

        <Route path={"/items/:itemId"} element={<ItemDetail />} />
        <Route path={"/moods/:moodId"} element={<Mood setColorTheme={setColorTheme}/>} />

        <Route path={"/error"} element={<Error setColorTheme={setColorTheme}/>} />

        <Route path={"*"} element={<NotFound setColorTheme={setColorTheme}/>} />


      </Routes>
      <span id="clip-message" style={showMessage? {opacity: "1", transition: "1s"} : {opacity: "0", transition: "0.5s"}} role="textbox" >{clipMessage}</span>
      <img src={clipImg} id="clip" onClick={handleClick} style={showMessage? {animation: "myAnim 1s ease 0s 1 normal forwards"} : {}}/>

      <Footer />
    </div>
  )
}

export default App
