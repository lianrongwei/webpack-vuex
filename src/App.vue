<template>
	<div>
		<h1>App.vue</h1>
		<input type="button" value="count++" @click="add">
		<input type="button" value="count--" @click="remove">
		<hr>
		<demo1></demo1>
		<hr>
		<demo2></demo2>
		<hr>
	</div>
</template>
<script>
import demo1 from './main/demo1.vue'
import demo2 from './main/demo2.vue'
export default {
	methods: {
		add () {
			this.$store.commit('increment')
		},
		remove () {
			this.$store.commit('subtract', 2)
		}
	},
	components: {
		demo1,
		demo2
	}
}
</script>
<style scoped>
</style>