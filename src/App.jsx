import { TaskCard } from './components/TaskCard'
import todoLogo from './assets/Logo.svg'
import clipboard from './assets/Clipboard.svg'
import plus from './assets/plus.svg'

import './global.css'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [newTask, setNewTask] = useState('')
  const [countTask, setCountTask] = useState()
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // Filtrar tarefas concluídas e atualizar a variável countTask
    const finishedTasks = tasks.filter(task => task.isFinished == true)
    setCountTask(finishedTasks.length)
  }, [tasks])

  function handleNewTask() {
    const newId = Math.floor(Math.random() * 100000000000)
    const task = {
      id: newId,
      content: newTask,
      isFinished: false,
    }
    setTasks(prevState => [task, ...prevState])
    setNewTask('')
  }

  return (
    <div className="App">
      <header>
        <img src={todoLogo} />
      </header>
      <div className="form">
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
        />
        <button type="button" onClick={handleNewTask}>
          Criar <img src={plus} />
        </button>
      </div>
      <div className="headerCab">
        <div className="todoStats">
          <p className="todoStatsCriadas"> Tarefas criadas: {tasks.length} </p>
          <p className="todoStatsConc"> Concluídas: {countTask} de {tasks.length} </p>
        </div>
      </div>
      <div className="tasksContainer">
        <div className="tasks">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              content={task.content}
              countTask={countTask}
              isFinished={task.isFinished}
              onDelete={() =>
                setTasks(prevState =>
                  prevState.filter(t => t.id !== task.id)
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App