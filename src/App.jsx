import { useState } from 'react'
 
import './App.css'

function App() {
 

  return (
    <>
      <div className='main'>
        <div className="read">
          read
        </div>

        <div className="create">
        <div className="add-box">
           <h2>Add A Task</h2>
          <form className='inputs' id='add-task'>
            <input type="text" placeholder='Title' name='task-title'/>
            <input type="date" id='date' value="0" name='task-date'/>
            <input type="time" id='time' value="0" name='task-time'/>
          </form>
          <button id='add-task-btn'>Add</button>
        </div>
        </div>
        

      </div>
    </>
  )
}

export default App
