import { useState, useEffect } from 'react'
import { tasks as data } from './tasks'

console.log(data);

function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, []);

    if (tasks.length === 0) {
        return <h1>No Tasks</h1>
    }

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} >{task.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList