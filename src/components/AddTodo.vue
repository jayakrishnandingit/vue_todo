<template>
	<div>
		<form @submit="addTodo">
			<input type="text" name="title" v-model="title" placeholder="Add todo..">
			<input type="submit" value="Add" class="btn">
		</form>
	</div>
</template>

<script>
	import { v4 as uuidv4 } from 'uuid';
	export default {
		name: "AddTodo",
		data() {
			return {
				title: ''
			}
		},
		methods: {
			addTodo(e) {
				e.preventDefault();
				// a function that creates a todo object
				// and emits it to the parent.
				const newTodo = {
					id: uuidv4(),
					title: this.title,
					completed: false
				};
				// send it to parent component.
				this.$emit('add-todo', newTodo);
				// clear the input.
				this.title = '';
			}
		}
	}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>