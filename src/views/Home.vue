<template>
  <div id="app">
    <AddTodo />
    <FilterTodos />
    <Todos v-bind:todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
  import AddTodo from '../components/AddTodo';
  import FilterTodos from '../components/FilterTodos';
  import Todos from '../components/Todos';

  export default {
    name: 'Home',
    components: {
      AddTodo,
      FilterTodos,
      Todos
    }
  }
</script>

<style scoped>

</style>
