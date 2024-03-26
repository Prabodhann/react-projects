// 0 1 2
//
// 7 8 9

import { useEffect, useState } from 'react';
import './ticTacToe.css';

function Sqaures({ value, onClick }) {
  return (
    <button onClick={onClick} className="sqaure">
      {value}
    </button>
  );
}
export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState('');

  function handleClick(getCurrentSquare) {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
    setIsXTurn(!isXTurn);
    setSquares(copySquares);
  }

  function getWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(''));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== '')) {
      setStatus('This is a draw! Please restart the game');
    } else if (getWinner(squares)) {
      setStatus(`Ths winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-container">
      <h1>Tic-tac-toe Game</h1>
      <div className="row">
        <Sqaures value={squares[0]} onClick={() => handleClick(0)} />
        <Sqaures value={squares[1]} onClick={() => handleClick(1)} />
        <Sqaures value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Sqaures value={squares[3]} onClick={() => handleClick(3)} />
        <Sqaures value={squares[4]} onClick={() => handleClick(4)} />
        <Sqaures value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Sqaures value={squares[6]} onClick={() => handleClick(6)} />
        <Sqaures value={squares[7]} onClick={() => handleClick(7)} />
        <Sqaures value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1> {status} </h1>
      <button onClick={handleRestart}> Restart</button>
    </div>
  );
}
