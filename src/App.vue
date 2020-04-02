<template>
  <div id="app">
    <Header />
    <AddTodo @add-todo="addTodo" />
    <Todos v-bind:todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
  import Header from './components/layout/Header';
  import AddTodo from './components/AddTodo';
  import Todos from './components/Todos';

  export default {
    name: 'App',
    components: {
      Header,
      AddTodo,
      Todos
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            title: "Todo one",
            completed: false
          },
          {
            id: 2,
            title: "Todo two",
            completed: true
          },
          {
            id: 3,
            title: "Todo three",
            completed: false
          }
        ]
      }
    },
    methods: {
      setTodos(todos) {
        this.todos = [...todos];
      },
      addTodo(todo) {
        let todos = [...this.todos, todo];
        this.setTodos(todos);
      },
      deleteTodo(id) {
        const todos = this.todos.filter(todo => todo.id != id);
        this.setTodos(todos)
      }
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
