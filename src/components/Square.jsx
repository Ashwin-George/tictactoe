import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type="button"
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
