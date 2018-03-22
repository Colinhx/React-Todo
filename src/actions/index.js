let nextTodoId = 0
export const addTodo = (name, detail, deadline, subTodos) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    deadline,
    name,
    detail,
    subTodos
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
});

export const deleteSubTodo = (id, subid, completed) => ({
  type: 'DELETE_SUBTODO',
  id,
  subid,
  completed
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const toggleSubtodo = (id, subid, completed) => ({
  type: 'TOGGLE_SUBTODO',
  id,
  subid,
  completed
});
