import axios from 'axios'  // eslint-disable-line

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(BASE_URL);
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const todo = {
            title,
            completed: false
        }
        const response = await axios.post(BASE_URL, todo);
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(BASE_URL + `/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(BASE_URL + `?_limit=${limit}`);
        commit('setTodos', response.data);
    }
};

const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    },
    newTodo: (state, todo) => {state.todos = [todo, ...state.todos]},
    removeTodo: (state, id) => {state.todos = state.todos.filter(todo => todo.id != id)}
};

export default {
    state,
    getters,
    actions,
    mutations
};
