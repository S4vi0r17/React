import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Learn React',
        done: false
    },
    {
        id: new Date().getTime() + 1000,
        description: 'Learn Node',
        done: false
    }
];

const TodoApp = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const totalTasks = state.length;
    const completedTasks = state.filter(todo => todo.done).length;
    const pendingTasks = totalTasks - completedTasks;

    const onNewTask = (todo) => {
        console.log(todo);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7 mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>To-Do List</h2>
                        <div className="text-muted">
                            <small>
                                Total: {totalTasks} |
                                Pending: {pendingTasks} |
                                Completed: {completedTasks}
                            </small>
                        </div>
                    </div>
                    <TodoList state={state} dispatch={dispatch} />
                </div>
                <div className='col-md-5'>
                    <h2 className="mb-4">Add To-Do</h2>
                    <TodoAdd onNewTask={onNewTask} dispatch={dispatch} />
                </div>
            </div>
        </div>
    )
};

export default TodoApp;