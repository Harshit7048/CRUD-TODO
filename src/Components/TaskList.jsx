import Task from "./Task";

export default function TaskList({items , setToggle}){

    return (
        <div className="task-list">

            {items.map((item)=><Task key={item.id} item={item} setCompleted={item.setCompleted} setToggle={setToggle}/>)}
            
        </div>
    )
}