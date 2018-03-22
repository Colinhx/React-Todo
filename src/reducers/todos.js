const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          detail: action.detail,
          deadline: action.deadline,
          subtodos: action.subTodos,
          completed: false
        }
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id!==action.id);
    case 'DELETE_SUBTODO':
      return state.map(todo =>
          todo.id === action.id
          ? {
            ...todo,
            completed: action.completed ? todo.completed : todo.subtodos.filter(subtodo => !subtodo.completed).length === 1,
            subtodos: todo.subtodos.filter(subtodo => subtodo.id!==action.subid)
          }
          : todo
      );
    case 'TOGGLE_TODO':
      return state.map(todo =>
          todo.id === action.id
          ? {
            ...todo,
            completed: !todo.completed,
            subtodos: todo.subtodos.map(subtodo =>
              todo.completed
              ? {...subtodo, completed: false}
              : {...subtodo, completed: true}
            )
          }
          : todo
      );
    case 'TOGGLE_SUBTODO':
      return state.map(todo =>
        todo.id === action.id
        ? {
          ...todo,
          completed: action.completed ? false : todo.subtodos.filter(subtodo => !subtodo.completed).length === 1,
          subtodos: todo.subtodos.map(subtodo => subtodo.id===action.subid
          ? {...subtodo, completed: !subtodo.completed}
          : subtodo)
        }
        : todo
      );
    default:
      return state;
  }
}
 
export default todos
