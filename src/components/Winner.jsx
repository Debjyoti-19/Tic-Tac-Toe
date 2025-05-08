import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store/gameStore';

function Winner() {
    const navigate = useNavigate();
    const { rematch, resetGame, winnerName } = useGameStore();

    const handleRematch = () => {
        rematch();
        setTimeout(() => {
            navigate('/game')
        }, 0)
    };

    const handleExit = () => {
        resetGame();
        setTimeout(() => {
            navigate('/')
        }, 0)
    };

    return (
        <div className='bg-midnight h-screen text-daylight flex justify-center items-center'>
            <div className=''>
                <p className='text-3xl w-screen font-cosmicrelief text-center'>
                    {winnerName !== "Draw" ? `${winnerName} Wins! 🎉` : "It's a draw!"}
                </p>
                <div className='text-center mt-10 flex justify-center gap-2 font-cosmicrelief text-sm'>
                    <button className='bg-evening/60 text-daylight w-30 cursor-pointer p-1' onClick={handleRematch}>
                        Rematch
                    </button>
                    <button className='bg-night w-30 cursor-pointer p-1' onClick={handleExit}>
                        Exit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Winner;