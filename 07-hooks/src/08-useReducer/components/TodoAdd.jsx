import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'

const TodoAdd = ({ onNewTask }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTask(newTask);
        onResetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Enter task..."
                    autoComplete="off"
                    value={description}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary w-100"
            >
                Add Task
            </button>
        </form>
    )
}

TodoAdd.propTypes = {
    onNewTask: PropTypes.func.isRequired
}

export default TodoAdd
