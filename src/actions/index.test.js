import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('todo name', 'todo detail', '2018-03-21',[])).toEqual({
      type: 'ADD_TODO',
      id: 0,
      name: 'todo name',
      deadline: '2018-03-21',
      detail: 'todo detail',
      subTodos: []
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(0)).toEqual({
      type: 'DELETE_TODO',
      id: 0
    })
  })

  it('deleteSubTodo should create DELETE_SUBTODO action', () => {
    expect(actions.deleteSubTodo(0, 1, true)).toEqual({
      type: 'DELETE_SUBTODO',
      id: 0,
      subid: 1,
      completed: true
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('toggleTodo should create TOGGLE_SUBTODO action', () => {
    expect(actions.toggleSubtodo(0, 1, false)).toEqual({
      type: 'TOGGLE_SUBTODO',
      id: 0,
      subid: 1,
      completed: false
    })
  })
})
