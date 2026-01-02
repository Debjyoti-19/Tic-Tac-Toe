import { useState } from 'react';
import { axiosInstance } from '../lib/axios';

function Create() {
  const [playerName, setPlayerName] = useState('');
  const [gameCode, setGameCode] = useState('');

  const handlePlayerKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const name = e.target.value; // Get the input value
      setPlayerName(name); // Update the state

      try {
        const response = await axiosInstance.post('/generate-code', { playerName: name }); // Add endpoint
        setGameCode(response.data.code); // Extract and set the game code
      } catch (error) {
        console.error('Error generating game code:', error);
      }
    }
  };

  return (
    <div className="bg-midnight h-screen flex justify-center items-center">
      <div>
        {playerName === '' ? (
          <input
            type="text"
            className="h-10 w-60 bg-daylight outline-none text-center font-coralpixel rounded-2xl"
            placeholder="Enter name"
            value={playerName} // Bind input value to state
            onChange={(e) => setPlayerName(e.target.value)} // Update state on input change
            onKeyDown={handlePlayerKeyDown} // Handle Enter key press
          />
        ) : (
          <div>
            <p>Game Code: {gameCode}</p>
            <p>byeworld</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Create;