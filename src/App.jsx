import { TaskCard } from './components/TaskCard'
import todoLogo from './assets/Logo.svg'
import clipboard from './assets/Clipboard.svg'
import plus from './assets/plus.svg'

import './global.css'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [ newTask, setNewTask ] = useState('');
  const [ tasks, setTasks ] = useState([]);

  function handleNewTask(){

    const newId = Math.floor(Math.random() * 100000000000)

    const task = {
      id: newId,
      content: newTask,
      isFinished: false,
    };

    setTasks(prevState => [...prevState, task]);
    setNewTask('');
  }

  return (
    <div className="App">
        <header> 
          <img src={todoLogo} />
        </header>
        <div className="form">
            <input 
              placeholder='Adicione uma nova tarefa'
              onChange={e => setNewTask(e.target.value)}
              value={newTask}
            />
            <button type='button' onClick={handleNewTask}> Criar <img src={plus}/> </button>
        </div>
        <div className="todoStats">
              <p> Tarefas Criadas </p>
              <p> Concluídas  </p>
            </div>
        <div className="tasksContainer">
          <div className="tasks">
            {tasks.map(task => (
              <TaskCard 
                key={task.id}
                content={task.content}
                isFinished={task.isFinished} 
                onDelete={() => setTasks(prevState => prevState.filter(t => t.id !== task.id))}
                onKeyPress={(event) =>{
                  event.key === "Enter" && sendMessage();
                }}
              />
            ))}
          </div>
        </div>  
    </div>
  )
}
export default App