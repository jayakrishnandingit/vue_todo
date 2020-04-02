<template>
	<div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
		<p>
			<input type="checkbox" v-if="todo.completed" v-on:change="markComplete" checked>
			<input type="checkbox" v-if="!todo.completed" v-on:change="markComplete">
			{{todo.title}}
			<button class="del" @click="$emit('del-todo', todo.id)">x</button>
		</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "TodoItem",
		props: ["todo"],
		methods: {
			markComplete() {
				this.todo.completed = !this.todo.completed;
			}
		}
	}
</script>

<style type="text/css" scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>