import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div id="dashboard">
      <h1>¿Cómo te encuentras hoy?</h1>
      <div id="emojis-btn">
        <Link to="/moods/happy">😀</Link>
        <Link to="/moods/love">🥰</Link>
        <Link to="/moods/scary">😱</Link>
        <Link to="/moods/sad">😢</Link>
        <Link to="/moods/rage">😡</Link>
      </div>
      
    </div>
  )
}

export default Dashboard