import { useState } from "react"
import TaskList from "./TaskList"
import Form from "./Form"

export default function RightSideBar() {

    const [allTask, setAllTask] = useState([])

    const handleTaskAdd = (item) => {
        setAllTask((items) => [...items, item])
    }

    const handleCompleted = (id) => {
        setAllTask((items) => items.filter((item) => item.id !== id));
    }
    return (
        <div className="right-bar">
            <div className='to-do-work'>
                <div className="read">
                    <TaskList items={allTask} setToggle={handleCompleted} />
                </div>

                <div className="create">
                    <Form
                        onAddTask={handleTaskAdd}
                    ></Form>
                </div>


            </div>
        </div>
    )
}