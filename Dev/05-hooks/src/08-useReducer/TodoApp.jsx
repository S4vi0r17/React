import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

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
                    <ul className="list-group">
                        {state.map((todo, index) => (
                            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>
                                    <span className="badge bg-primary me-2">{index + 1}</span>
                                    {todo.description}
                                </span>
                                <div>
                                    <button className="btn btn-outline-success btn-sm me-2">
                                        <i className="bi bi-check-lg"></i>
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm">
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='col-md-5'>
                    <h2 className="mb-4">Add To-Do</h2>
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Enter task..."
                                autoComplete="off"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default TodoApp;