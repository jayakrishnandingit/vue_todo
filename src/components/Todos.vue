<template>
    <div id=todos>
        <h1>Todos</h1>
        <div class="todos">
            <div class="todo" v-bind:key="todo.id" v-for="todo in allTodos">
                {{ todo.title }}
                <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Todos',
        methods: {
            /*
            Note: pass in all the actions you want to use.
            we could do the same format as mapGetters, however
            we have multiple methods hence this form.
            */
            ...mapActions(['fetchTodos', 'deleteTodo'])
        },
        computed: mapGetters(['allTodos']),  // pass in all the getters you want to use.
        created() {
            this.fetchTodos();
        }
    }
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
