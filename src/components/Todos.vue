<template>
    <div id=todos>
        <h1>Todos</h1>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)" />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import TodoItem from './TodoItem';

    export default {
        name: 'Todos',
        components: {
            TodoItem
        },
        computed: mapGetters(['allTodos'])  // pass in all the getters you want to use.
    }
</script>
