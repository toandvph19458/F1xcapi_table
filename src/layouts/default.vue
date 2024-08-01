<template>
	<div class="">
		<the-header />
		<main class="main">
			<router-view />
		</main>
		<the-footer />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "../components/common/the-header/index.vue";
import TheFooter from "../components/common/the-footer/index.vue";

export default defineComponent({
	name: "layout-default",
	components: {
		TheHeader,
		TheFooter,
	},
	props: {},
	setup(props, ctx) {},
});
</script>

<style lang="scss"></style>
