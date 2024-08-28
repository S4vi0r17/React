import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ state, onDeleteTask, dispatch }) => {
    return (
        <ul className="list-group">
            {state.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} onDeleteTask={onDeleteTask} index={index} dispatch={dispatch} />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    state: PropTypes.array.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default TodoList
