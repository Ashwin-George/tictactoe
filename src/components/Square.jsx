import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
