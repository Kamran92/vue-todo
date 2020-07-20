export default {
  state: {
    todos: [
      {id: 1, title: 'Примененил вебпак', active: false},
      {id: 2, title: 'Добавил bootstrap', active: false},
      {id: 3, title: 'Сверстал адаптивно ', active: false},
      {id: 4, title: 'Разделил на компоненты', active: false},
      {id: 5, title: 'Устроиться на работу', active: true},
    ],
    filter: 'all',
    search: ''

  },
  getters: {
    TODOS: state => {
      const {filter, todos, search} = state
      let newArr
      if (filter === 'all') {
        newArr = todos
      }
      if (filter === 'active') {
        newArr = todos.filter(elem => elem.active === true)
      }
      if (filter === 'notActive') {
        newArr = todos.filter(elem => elem.active === false)
      }

      if (search.trim()) {
        return newArr.filter((item) => {
          return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
      }
      return newArr
    },
    NUM_ACTIVE: state => {
      const activeArr = state.todos.filter((item) => item.active === true)
      return activeArr.length
    },
    NUM_NOT_ACTIVE: state => {
      const activeArr = state.todos.filter((item) => item.active === false)
      return activeArr.length
    }
  },
  mutations: {
    TOGGLE_ACTIVE: (state, id) => {
      const newTodos = state.todos.map(t => {
        if (t.id === id) {
          t.active = !t.active
          return t
        }
        return t
      })
      state.todos = newTodos

    },
    TOGGLE_FILTER: (state, filter) => {
      state.filter = filter
    },
    DELETE_TODO: (state, id) => {
      const newArr = state.todos.filter(elem => elem.id !== id)
      state.todos = newArr
    },
    ADD_TODO: (state, todo) => {
      state.todos.push(todo);
    },
    ADD_SEARCH_VALUE: (state, value) => {
      state.search = value
    },
  },
  actions: {},
}