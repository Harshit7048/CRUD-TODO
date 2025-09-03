import { useEffect, useState } from 'react'

import './App.css'
import Form from './Components/Form'
import TaskList from './Components/TaskList'

function App() {

  const [allTask,setAllTask] = useState([])

  const handleTaskAdd = (item)=>{
    setAllTask((items)=>[...items,item])
  }

  const handleCompleted = (id)=>{
    setAllTask((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className='main'>
        <div className="read">
       <TaskList items={allTask} setToggle={handleCompleted}/>
        </div>

        <div className="create">
         <Form
         onAddTask={handleTaskAdd}
         ></Form>
        </div>


      </div>
    </>
  )
}

export default App
