export default function Task({item ,setCompleted , setToggle}){

  


    return <li key={item.id}>
        <input type="checkBox"  onChange={()=> setToggle(item.id)}/>
        <p>{item.taskTitle}</p>
    </li>
}