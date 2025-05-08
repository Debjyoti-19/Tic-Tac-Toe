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
    <div className='bg-midnight flex h-screen justify-center items-center'>
      <div className=''>
        <div id="player1" className='m-5 w-screen justify-center flex -translate-x-20'>
          <input
            type="text"
            className='h-10 w-60 bg-daylight outline-none text-center font-coralpixel rounded-2xl'
            placeholder='First Player'
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            onKeyDown={handlePlayer1KeyDown} // Handle Enter key
          />
        </div>
        <div className='absolute not-last z-10 w-screen -translate-y-10 flex justify-center'><img src={vsImage} alt="VS" className="w-16 h-16" /></div>
        <div id="player2" className='m-5 w-screen flex justify-center translate-x-20'>
          <input
            type="text"
            className='h-10 w-60 bg-daylight outline-none text-center font-coralpixel rounded-2xl'
            placeholder='Second Player'
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            onKeyDown={handlePlayer2KeyDown} // Handle Enter key
            ref={player2InputRef} // Attach ref to player2 input
          />
        </div>
      </div>
    </div>
  )
}

export default Names