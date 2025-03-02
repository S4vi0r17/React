import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import { useTodo } from '../hooks/useTodo';

const TodoApp = () => {
  const {
    state,
    totalTasks,
    pendingTasks,
    completedTasks,
    onNewTask,
    onDeleteTask,
    onToggleTask,
    dispatch,
  } = useTodo();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>To-Do List</h2>
            <div className="text-muted">
              <small>
                Total: {totalTasks} | Pending: {pendingTasks} | Completed:{' '}
                {completedTasks}
              </small>
            </div>
          </div>
          <TodoList
            state={state}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            dispatch={dispatch}
          />
        </div>
        <div className="col-md-5">
          <h2 className="mb-4">Add To-Do</h2>
          <TodoAdd onNewTask={onNewTask} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
