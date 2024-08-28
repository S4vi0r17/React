import PropTypes from 'prop-types'

const TodoItem = ({ todo, onDeleteTask, index, onToggleTask }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span
                className={`d-flex align-items-center ${todo.done ? 'text-decoration-line-through text-muted' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => onToggleTask(todo.id)}
            >
                <span className="badge bg-primary me-2">{index + 1}</span>
                {todo.description}
            </span>
            <div>
                <button
                    onClick={() => onToggleTask(todo.id)}
                    className={`btn btn-outline-${todo.done ? 'secondary' : 'success'} btn-sm me-2`}
                >
                    <i className={`bi ${todo.done ? 'bi-arrow-counterclockwise' : 'bi-check-lg'}`}></i>
                </button>
                <button onClick={() => onDeleteTask(todo)} className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onToggleTask: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default TodoItem