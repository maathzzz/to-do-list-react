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
    event.preventDefault()
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
      <form onSubmit={handleNewTask} className="form">
        <input
          required={true}
          placeholder="Adicione uma nova tarefa"
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
          onKeyPress={e => {
            if (0) {
              if (e.key === 'Enter') {
                handleNewTask()
              }
            } else {
            }
          }}
        />
        <button type="submit">
          Criar <img src={plus} />
        </button>
      </form>
      <div className="headerCab">
        <div className="todoStats">
          <p className="todoStatsCriadas"> Tarefas criadas: {tasks.length} </p>
          <p className="todoStatsConc"> Concluídas: {countTask} de {tasks.length} </p>
        </div>
      </div>
      <div className='aa'>
        <div className="hr"></div>
      </div>
      <div className="tasksContainer">
      {tasks.length > 0 ? (
        <div className="tasks">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              content={task.content}
              countTask={countTask}
              setCountTask={setCountTask}
              isFinished={task.isFinished}
              onDelete={() =>
                setTasks(prevState =>
                  prevState.filter(t => t.id !== task.id)
                )
              }
            />
          ))}
        </div>
        ) : (
          <div className="todoNoTasks">
            <div> 
              <img src={clipboard}></img>
            </div>
            <strong> Você ainda não tem tarefas cadastradas </strong>
            <small> Crie tarefas e organize seus itens a fazer </small>
          </div>
        )}
      </div>
    </div>
  )
}

export default App