import trash from '../assets/trash.svg';
import React, { useState } from 'react';
import './TaskCard.css';

export function TaskCard({ content, onDelete }) {
  const [isFinished, setIsFinished] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsFinished(event.target.checked);
  };

  const contentStyle = {
    textDecoration: isFinished ? 'line-through' : 'none',
  };

  return (
    <div className="card">
      <input type='checkbox' onChange={handleCheckboxChange} />
      <p style={contentStyle}>{content}</p>
      <button type='button' onClick={onDelete}><img src={trash}/></button>
    </div>
  );
}