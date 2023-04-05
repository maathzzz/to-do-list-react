import todoLogo from './assets/Logo.svg'
import clipboard from './assets/Clipboard.svg'

import './global.css'
import './App.css'

function App() {

  return (
    <div className="App">
        <header> 
          <img src={todoLogo} />
        </header>
        <main>
          <form>
            <input placeholder='Adicione uma nova tarefa'></input>
            <button> Criar </button>
          </form>
          <div className="todoStats">
            <p> Tarefas Criadas </p>
            <p> Concluídas  </p>
          </div>
          <hr></hr>

          <div className="todoNoTasks">
            <img src={clipboard}></img>
            <p> Você ainda não tem tarefas cadastradas </p>
            <p> Crie tarefas e organize seus itens a fazer </p>
          </div>
        </main>
    </div>
  )
}

export default App