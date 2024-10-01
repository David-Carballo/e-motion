import { useState } from 'react'
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

function App() {

  const [themeDark, setThemeDark] = useState(false);

  const handleToggleTheme = () => {
    setThemeDark(!themeDark);
  }

  return (
    <div id="app" className={themeDark? "dark-theme" : "light-theme"}>
      <NavBar handleToggleTheme={handleToggleTheme}/>

      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"/add-item"} element={<AddItem />} />
        <Route path={"/edit-item/:itemId"} element={<EditItem />}/>

        <Route path={"/items/:itemId"} element={<ItemDetail />} />
        <Route path={"/moods/:moodId"} element={<Mood />} />

        <Route path={"/error"} element={<Error />} />

        <Route path={"*"} element={<NotFound />} />


      </Routes>

      <Footer />

      

     
        
    </div>
  )
}

export default App
