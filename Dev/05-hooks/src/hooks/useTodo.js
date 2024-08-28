import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Learn React',
    done: false,
  },
  {
    id: new Date().getTime() + 1000,
    description: 'Learn Node',
    done: false,
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    const todos = JSON.stringify(state);
    localStorage.setItem('todos', todos);
  }, [state]);

  const totalTasks = state.length;
  const completedTasks = state.filter((todo) => todo.done).length;
  const pendingTasks = totalTasks - completedTasks;

  const onNewTask = (todo) => {
    // dispatch({
    //     type: 'add',
    //     payload: todo
    // });

    const action = {
      type: 'add',
      payload: todo,
    };

    dispatch(action);
  };

  const onDeleteTask = (todo) => {
    dispatch({
      type: 'delete',
      payload: todo.id,
    });
  };

  const onToggleTask = (id) => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  };

  return {
    state,
    totalTasks,
    completedTasks,
    pendingTasks,
    dispatch,
    onNewTask,
    onDeleteTask,
    onToggleTask,
  }
};
