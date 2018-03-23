import todos from './todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subTodos: [{id:1}],
        completed: false
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [{id:1}],
        completed: false
      }
    ])

    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [],
          completed: false
        }
      ], {
        type: 'ADD_TODO',
        name: 'todo name 2',
        id: 1,
        deadline: '2018-03-20',
        detail: 'todo detail 2',
        subTodos: [],
        completed: false
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [],
        completed: false
      }, {
        name: 'todo name 2',
        id: 1,
        deadline: '2018-03-20',
        detail: 'todo detail 2',
        subtodos: [],
        completed: false
      }
    ])

    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [],
          completed: false
        }, {
          name: 'todo name 2',
          id: 1,
          deadline: '2018-03-20',
          detail: 'todo detail 2',
          subtodos: [],
          completed: false
        }
      ], {
        type: 'ADD_TODO',
        name: 'todo name 3',
        id: 2,
        deadline: '2018-03-20',
        detail: 'todo detail 3',
        subTodos: [],
        completed: false
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [],
        completed: false
      }, {
        name: 'todo name 2',
        id: 1,
        deadline: '2018-03-20',
        detail: 'todo detail 2',
        subtodos: [],
        completed: false
      }, {
        name: 'todo name 3',
        id: 2,
        deadline: '2018-03-20',
        detail: 'todo detail 3',
        subtodos: [],
        completed: false
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [],
          completed: false
        }, {
          name: 'todo name 2',
          id: 1,
          deadline: '2018-03-20',
          detail: 'todo detail 2',
          subtodos: [],
          completed: false
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [],
        completed: false
      }, {
        name: 'todo name 2',
        id: 1,
        deadline: '2018-03-20',
        detail: 'todo detail 2',
        subtodos: [],
        completed: true
      }
    ])

    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [
            {id:0, completed: false},
            {id:1, completed: false}
          ],
          completed: false
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 0
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [
          {id:0, completed: true},
          {id:1, completed: true}
        ],
        completed: true
      }
    ])

    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [
            {id:0, completed: false},
            {id:1, completed: true}
          ],
          completed: false
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 0
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [
          {id:0, completed: true},
          {id:1, completed: true}
        ],
        completed: true
      }
    ])

    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [
            {id:0, completed: true},
            {id:1, completed: true}
          ],
          completed: true
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 0
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [
          {id:0, completed: false},
          {id:1, completed: false}
        ],
        completed: false
      }
    ])
  })

  it('should handle DELETE_TODO', () => {
    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [],
          completed: false
        }, {
          name: 'todo name 2',
          id: 1,
          deadline: '2018-03-20',
          detail: 'todo detail 2',
          subtodos: [],
          completed: false
        }
      ], {
        type: 'DELETE_TODO',
        id: 1
      })
    ).toEqual([
      {
        name: 'todo name',
        id: 0,
        deadline: '2018-03-20',
        detail: 'todo detail',
        subtodos: [],
        completed: false
      }
    ])

    expect(
      todos([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [],
          completed: false
        }
      ], {
        type: 'DELETE_TODO',
        id: 0
      })
    ).toEqual([])

    expect(
      todos([], {
        type: 'DELETE_TODO',
        id: 0
      })
    ).toEqual([])
  })

    it('should handle DELETE_SUBTODO', () => {
      expect(
        todos([
          {
            name: 'todo name',
            id: 0,
            deadline: '2018-03-20',
            detail: 'todo detail',
            subtodos: [
              {id: 0, completed: true},
              {id: 1, completed: false}
            ],
            completed: false
          }
        ], {
          type: 'DELETE_SUBTODO',
          id: 0,
          subid: 1,
          completed: false
        })
      ).toEqual([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [{id: 0, completed: true}],
          completed: true
        }
      ])


        expect(
          todos([
            {
              name: 'todo name',
              id: 0,
              deadline: '2018-03-20',
              detail: 'todo detail',
              subtodos: [
                {id: 0, completed: true}
              ],
              completed: true
            }
          ], {
            type: 'DELETE_SUBTODO',
            id: 0,
            subid: 0,
            completed: true
          })
        ).toEqual([
          {
            name: 'todo name',
            id: 0,
            deadline: '2018-03-20',
            detail: 'todo detail',
            subtodos: [],
            completed: true
          }
        ])


      expect(
        todos([
          {
            name: 'todo name',
            id: 0,
            deadline: '2018-03-20',
            detail: 'todo detail',
            subtodos: [{id: 0, completed: false}],
            completed: false
          }
        ], {
          type: 'DELETE_SUBTODO',
          id: 0,
          subid: 0,
          completed: false
        })
      ).toEqual([{
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [],
          completed: true
        }])

      expect(
        todos([], {
          type: 'DELETE_SUBTODO',
          id: 0
        })
      ).toEqual([])
    })


    it('should handle TOGGLE_SUBTODO', () => {

      expect(
        todos([
          {
            name: 'todo name',
            id: 0,
            deadline: '2018-03-20',
            detail: 'todo detail',
            subtodos: [
              {id:0, completed: false},
              {id:1, completed: false}
            ],
            completed: false
          }
        ], {
          type: 'TOGGLE_SUBTODO',
          id: 0,
          completed: false,
          subid: 0
        })
      ).toEqual([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [
            {id:0, completed: true},
            {id:1, completed: false}
          ],
          completed: false
        }
      ])

      expect(
        todos([
          {
            name: 'todo name',
            id: 0,
            deadline: '2018-03-20',
            detail: 'todo detail',
            subtodos: [
              {id:0, completed: false},
              {id:1, completed: true}
            ],
            completed: false
          }
        ], {
          type: 'TOGGLE_SUBTODO',
          id: 0,
          completed: false,
          subid: 0
        })
      ).toEqual([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [
            {id:0, completed: true},
            {id:1, completed: true}
          ],
          completed: true
        }
      ])

      expect(
        todos([
          {
            name: 'todo name',
            id: 0,
            deadline: '2018-03-20',
            detail: 'todo detail',
            subtodos: [
              {id:0, completed: true},
              {id:1, completed: true}
            ],
            completed: true
          }
        ], {
          type: 'TOGGLE_SUBTODO',
          id: 0,
          completed: true,
          subid: 0
        })
      ).toEqual([
        {
          name: 'todo name',
          id: 0,
          deadline: '2018-03-20',
          detail: 'todo detail',
          subtodos: [
            {id:0, completed: false},
            {id:1, completed: true}
          ],
          completed: false
        }
      ])
    })
})
