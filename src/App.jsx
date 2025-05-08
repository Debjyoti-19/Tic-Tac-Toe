import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Board from './components/Board'
import Names from './components/Names'
import useGameStore from './store/gameStore'
import Winner from './components/Winner'

function App() {
  const { gotPlayers, winnerName } = useGameStore()

  return (
      <Routes>
        <Route path="/" element={<Names />} />
        <Route 
          path="/game" 
          element={gotPlayers === true ? <Board /> : <Navigate to="/" />}
        />
        <Route path='/winner' element={winnerName.trim() !== ""? <Winner /> : <Navigate to="/" />} />
      </Routes>
  )
}

export default App
