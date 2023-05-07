import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
    // массив для хранения клеток игрового поля
    const [squares, setSquares] = useState(Array(9).fill(null));
    // чья очередь ходить - X или 0
    const [xIsNext, setXIsNext] = useState(true);
    // функция для определения победителя
    const winner = calculateWinner(squares);

    // вызывается при клике на игровом поле
    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (winner || squaresCopy[i]) return;
        squaresCopy[i] = xIsNext ? "X" : "O";
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
    };

    // принимает номер квадрата и возвращает кнопку, на которую можно кликнуть и сделать ход
    const renderSquare = (i) => {
        return (
          <button className="square" onClick={() => handleClick(i)}>
            {squares[i]}
          </button>
        );
    };

     const status = winner
       ? `Winner: ${winner}`
       : `Next player: ${xIsNext ? "X" : "O"}`;


     return (
       <div className="game-field">
         <div className="status">{status}</div>
         <div className="board-row flex">
           {renderSquare(0)}
           {renderSquare(1)}
           {renderSquare(2)}
         </div>
         <div className="board-row flex">
           {renderSquare(3)}
           {renderSquare(4)}
           {renderSquare(5)}
         </div>
         <div className="board-row flex">
           {renderSquare(6)}
           {renderSquare(7)}
           {renderSquare(8)}
         </div>
       </div>
     );
};



// выявление победителя
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};




