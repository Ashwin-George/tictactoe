import React from 'react';

const Square = ({ value }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type="button">{value}</button>
  );
};

export default Square;
