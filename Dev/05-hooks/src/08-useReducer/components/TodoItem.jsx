import PropTypes from 'prop-types'

const TodoItem = ({todo, index}) => {
    return (
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
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default TodoItem