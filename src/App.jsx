import { useEffect, useState } from 'react'

import './App.css'
import Form from './Components/Form'
import TaskList from './Components/TaskList'
import SideBar from './Components/SideBar'
import RightSideBar from './Components/RightSideBar'

function App() {
 

  return (
    <>
<div className="main">
<SideBar/>
 <RightSideBar/>


</div>
   


    
 
    </>
  )
}

export default App
