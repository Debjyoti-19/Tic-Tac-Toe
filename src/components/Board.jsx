import { Circle, X } from 'lucide-react'
import React, { useState } from 'react'
import useGameStore from '../store/gameStore.js'
import { useNavigate } from 'react-router-dom';

function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(false);
  const { player, player1, player2, changePlayer, changeWinnerName, winnerName } = useGameStore();

  const navigate = useNavigate()

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newCells) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newCells[a] &&
        newCells[a] === newCells[b] &&
        newCells[a] === newCells[c]
      ) {
        return newCells[a] === 'O' ? player1 : player2;
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (cells[index] === null && !winner) {
      const newCells = [...cells];
      newCells[index] = player === 0 ? 'O' : 'X';
      setCells(newCells);

      const gameWinner = checkWinner(newCells);
      if (gameWinner) {
        changeWinnerName(gameWinner)
        setWinner(true)
        navigate('/winner')
      } else if (newCells.every((cell) => cell !== null)) {
        changeWinnerName('Draw')
        setWinner(true)
        navigate('/winner')
      } else {
        changePlayer();
      }
    }
  };

  return (
    <div className="bg-midnight h-screen flex justify-center items-center">
        <div className="absolute top-30 font-cosmicrelief text-daylight text-3xl">
          <div className="w-screen flex justify-center">Turn of</div>
          <div className="w-screen flex justify-center">{player === 0 ? player1 : player2}</div>
        </div>
      <div className="h-50 w-50 bg-evening grid grid-cols-3 gap-1 text-daylight cursor-pointer">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="h-16 w-16 bg-midnight flex justify-center items-center hover:bg-night"
            onClick={() => handleClick(index)}
          >
            {cell === 'O' ? <Circle className="h-10 w-10" /> : cell === 'X' ? <X className="h-10 w-10" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;