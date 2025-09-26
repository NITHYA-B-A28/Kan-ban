import './App.css'
import Board from './Board'
import { BoardProvider } from './BoardContext'
import Kanban from './Kanban'

function App() {
  

  return (
    <div>
    <Kanban/>
   <BoardProvider>
    <Board/>
   </BoardProvider>
   </div>
  )
}

export default App