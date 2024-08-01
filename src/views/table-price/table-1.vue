<template>
	<div class="wrapper">
		<!--@@@ table header  -->
		<table-header />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableHeader from "../../components/table-price/table-header.vue";

export default defineComponent({
	name: "tabel-1",
	components: {
		TableHeader,
	},
	setup(props, ctx) {},
});
</script>

<style lang="scss">
.wrapper {
	background-color: #090618;
}
</style>
