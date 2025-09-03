import { useState } from "react";

export default function Form({onAddTask}) {

    const [taskTitle , setTaskTitle] = useState("");
    const [completed , setCompleted ] = useState(false)


    const addTask = (e)=>{
        e.preventDefault();
         

        const newItem = {
           taskTitle, completed , id:Date.now() , setCompleted
        }
        console.log(newItem);

        onAddTask(newItem)
    }




    return (
        <form>
            <input type="text" name="title" onChange={(e)=> setTaskTitle(e.target.value)}/>
            
            <button onClick={ addTask}>Add</button>
        </form>
    )
};