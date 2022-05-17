import React from 'react';

function Button({ text, className, onClick }) {
  return (
    <button
      className={`globalStyle ${className}`}
      onClick={(e) => {
        onClick(e.target.innerText);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
