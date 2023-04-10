import trash from '../assets/trash.svg';
import React, { useState } from 'react';
import './TaskCard.css';

export function TaskCard({ content, onDelete, isFinished, countTask, setCountTask }) {
  const [isFinishedTask, setIsFinishedTask] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsFinishedTask(event.target.checked);
    console.log(event.target.checked)

    if(isFinishedTask == false) {
      isFinished = true;
      setCountTask(countTask + 1)
    } else {
      isFinished = false;
      setCountTask(countTask - 1)
    }
  };
  
  const contentStyle = {
    textDecoration: isFinishedTask ? 'line-through' : 'none',
    color: isFinishedTask ? 'var(--gray-300)' : 'white',
  };

  return (
    <div className="card elementoum">
            <input type='checkbox' onChange={handleCheckboxChange} />
            <div>
              <p style={contentStyle}>{content}</p>
            </div>
        <div className="btn">
            <button type='button' onClick={onDelete}><img src={trash}/></button>
        </div>
    </div>
  );
}