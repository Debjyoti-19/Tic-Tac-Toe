import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Board from './components/Board'
import Names from './components/Names'
import useGameStore from './store/gameStore'
import Winner from './components/Winner'
import Online from './components/Online'
import Create from './components/Create'
import Join from './components/Join'

function App() {
  const { gotPlayers, winnerName } = useGameStore()

  return (
    <Routes>
      <Route path="/" element={<Names />} />
      <Route
        path="/game"
        element={gotPlayers === true ? <Board /> : <Navigate to="/" />}
      />
      <Route path='/winner' element={winnerName.trim() !== "" ? <Winner /> : <Navigate to="/" />} />
      <Route path='/online' element={<Online />} />
      <Route path='/online/create' element={<Create />} />
      <Route path='/online/join' element={<Join />} />
    </Routes>
  )
}

export default App
