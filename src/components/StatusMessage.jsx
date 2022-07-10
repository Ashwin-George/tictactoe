import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${current.isXNext ? 'X' : 'O'}`;}
  const noMovesLeft = current.board.every(element => element !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `Game Tied`}
    </h2>
  );
};

export default StatusMessage;
