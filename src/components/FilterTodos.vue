<template>
	<div>
		Filter
		<select @change="filterTodos($event)">
			<option value="200">200</option>
			<option value="100">100</option>
			<option value="50">50</option>
			<option value="25">25</option>
			<option value="10">10</option>
			<option value="15">5</option>
		</select>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'FilterTodos',
		methods: mapActions(['filterTodos'])
	}
</script>