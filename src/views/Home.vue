<template>
  <div id="app">
    <AddTodo @add-todo="addTodo" />
    <Todos v-bind:todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import AddTodo from '../components/AddTodo';
  import Todos from '../components/Todos';

  export default {
    name: 'Home',
    components: {
      AddTodo,
      Todos
    },
    data() {
      return {
        todos: [],
        BASE_URL: 'https://jsonplaceholder.typicode.com/todos'
      }
    },
    methods: {
      setTodos(todos) {
        /*
        Update state and therefore the UI.
        */
        this.todos = [...todos]; // ES6: Copy an array using spread operator.
      },
      addTodo(todo) {
        /*
        Add a todo item to the server and update the state.
        */
        const {title, completed} = todo; // ES6: spread an object into respective variables.
        axios.post(this.BASE_URL, {
          title,
          completed
        }).then(response => {
          let todos = [...this.todos, response.data]; // ES6: Copy an array and append new data as well.
          this.setTodos(todos);
        }).catch(err => console.log(err))        
      },
      deleteTodo(id) {
        /*
        Delete a todo item by ID from the server and update the state.
        */
        axios.delete(`${this.BASE_URL}/${id}`)
          .then(response => { // eslint-disable-line
            const todos = this.todos.filter(todo => todo.id != id);
            this.setTodos(todos);
          }).catch(err => console.log(err))
      }
    },
    created() {
      /*
      A method that is called as soon as a component is mounted.
      Similar to `componentDidMount` of React.

      Get 5 todos from the server and update state.
      */
      axios.get(`${this.BASE_URL}?_limit=5`)
        .then(response => this.setTodos(response.data))
        .catch(err => console.log(err))
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
