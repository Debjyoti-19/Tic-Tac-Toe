import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import vsImage from '../assets/vs.png'
import useGameStore from '../store/gameStore'

function Names() {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const player2InputRef = useRef(null)
  const navigate = useNavigate()

  const { changePlayer1, changePlayer2, playersReady } = useGameStore()

  const onSubmit = () => {
    if (player1.trim() && player2.trim()) {
      changePlayer1(player1)
      changePlayer2(player2)
      playersReady()
      navigate('/game')
    }
  }

  const handlePlayer1KeyDown = (e) => {
    if (e.key === 'Enter') {
      player2InputRef.current.focus()
    }
  }

  const handlePlayer2KeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <div className='bg-midnight flex h-screen justify-center items-center relative overflow-hidden'>
      <div className='-translate-y-20'>
        <div id="player1" className='m-5 justify-center flex -translate-x-13 sm:-translate-x-20'>
          <input
            type="text"
            className='h-10 w-40 sm:w-60 bg-daylight outline-none text-center font-coralpixel rounded-2xl'
            placeholder='First Player'
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            onKeyDown={handlePlayer1KeyDown}
          />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1'>
          <img src={vsImage} alt="VS" className="w-16 h-16" />
        </div>
        <div id="player2" className='m-5 flex justify-center translate-x-13 sm:translate-x-20'>
          <input
            type="text"
            className='h-10 w-40 sm:w-60 bg-daylight outline-none text-center font-coralpixel rounded-2xl'
            placeholder='Second Player'
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            onKeyDown={handlePlayer2KeyDown}
            ref={player2InputRef}
          />
        </div>
      </div>
      <div id="online" className='w-screen text-daylight/80 hover:text-daylight/70 absolute translate-y-6 text-center cursor-pointer transition' onClick={() => navigate('/online')}>
        Play online 🌎
      </div>
    </div>
  )
}

export default Names