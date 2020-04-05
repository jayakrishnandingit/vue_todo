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
    }
};

const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
