import React from 'react';

const Square = ({ onClick, value }) => (
  <button type="button" className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
