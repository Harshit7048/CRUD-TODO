export default function Task({item ,setCompleted , setToggle}){

  


    return <li className="task-li" key={item.id} style={ {background: item.color}}>
        <input type="checkBox"  onChange={()=> setToggle(item.id)}/>
        <h3>{item.taskTitle}</h3> <p>| Due Date - {item.date}</p>
    </li>
}