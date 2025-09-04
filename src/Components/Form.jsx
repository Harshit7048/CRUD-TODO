import { useState } from "react";

export default function Form({onAddTask}) {

    const [taskTitle , setTaskTitle] = useState("");
    const [completed , setCompleted ] = useState(false);
    const [date , setTaskDate] = useState('');
    const [color , setColour] = useState('white')


    const addTask = (e)=>{
        e.preventDefault();
         

        const newItem = {
           taskTitle, completed , id:Date.now() , date , color, setCompleted
        }
        console.log(newItem);

        onAddTask(newItem)

    }




    return (
        <form className="add-task-form">
            <input type="text" name="title" onChange={(e)=> setTaskTitle(e.target.value)}/>
            <select name="color" id="" onChange={(e)=>setColour(e.target.value)}>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Pink">Pink</option>
                <option value="Blue">Blue</option>
                <option value="white">White</option>
                
            </select>
            <input type="date" id="date-inp" onChange={(e)=>setTaskDate(e.target.value)}/>
            
            <button onClick={ addTask}>Add Task</button>
        </form>
    )
};