import PropTypes from 'prop-types'

const TodoItem = ({todo, onDeleteTask, index}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>
                <span className="badge bg-primary me-2">{index + 1}</span>
                {todo.description}
            </span>
            <div>
                <button className="btn btn-outline-success btn-sm me-2">
                    <i className="bi bi-check-lg"></i>
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
    index: PropTypes.number.isRequired,
}

export default TodoItem