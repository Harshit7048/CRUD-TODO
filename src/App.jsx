import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [newTask, setNewTask] = useState({
    taskTitle: "",
    taskDate: "",
    taskTime: ""
  })

 

  const [allTask, setAllTask] = useState([{}])

  const addTask = (e) => {
    e.preventDefault();
    console.log("I am adding task");
    let form = document.getElementById('add-task');

    console.log(form.taskTitle.value, form.taskDate.value, form.taskTime.value);

    let newKey = `TSK-${Math.floor(Math.random() * 900) + 100}`

    setNewTask({ newKey: `${newKey}`, taskTitle: `${form.taskTitle.value}`, takDate: form.taskDate.value, taskTime: form.taskTime.value })

    setAllTask((prev)=> prev.length <= 0 ?[newTask]:[...prev , newTask])

    console.log(allTask);

   
  }
  useEffect(()=>{
    console.log("items updated");
  },[allTask])

  return (
    <>
      <div className='main'>
        <div className="read">

         {
          allTask.map((ele)=> <div className='task-main'>{ele.taskTitle}</div>)
         }

        </div>

        <div className="create">
          <div className="add-box">
            <h2>Add A Task</h2>
            <form className='inputs' id='add-task'>
              <input type="text" placeholder='Title' name='taskTitle' />
              <input type="date" id='date' name='taskDate' />
              <input type="time" id='time' name='taskTime' />
            </form>
            <button id='add-task-btn' onClick={addTask}>Add</button>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
