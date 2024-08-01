<template>
	<div class="wrapper">
		<!--@@@ table header  -->
		<table-header />

		<div class="table-price">
			<div class="table-price__list">
				<div class="table-price__card">
					<div class="table-price__card-header">
						<div class="table-price_card-box">
							<img
								class="table-price__card-icon"
								src="../../assets/img/icon/Illus.png"
							/>
							<h4 class="table-price__card-title">NÔNG SẢN</h4>
						</div>

						<div class="table-price_card-k">
							<Select
								v-model="selectedCity"
								:options="cities"
								optionLabel="name"
								placeholder="Select a City"
								class=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import TableHeader from "../../components/table-price/table-header.vue";
import Select from "primevue/select";

export default defineComponent({
	name: "tabel-1",
	components: {
		TableHeader,
		Select,
	},
	setup(props, ctx) {
		const selectedCity = ref("ALL");
		const cities = ref([
			{ name: "Tất cả", code: "ALL" },
			{ name: "Rome", code: "RM" },
		]);

		return {
			cities,
			selectedCity,
		};
	},
});
</script>

<style lang="scss">
.wrapper {
	background-color: #090618;

	.table-price {
		width: 100%;
		max-width: 1760px;
		margin: 0 auto;

		.table-price__list {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}

		.table-price__card {
			background: #100c26;
			border-radius: 16px;
			overflow: hidden;
		}
		.table-price__card-header {
			padding: 24px 24px 0 24px;
			display: flex;
			align-self: center;
			justify-content: space-between;
		}
		.table-price_card-box {
			display: flex;
			align-items: center;
		}
		.table-price__card-icon {
		}
		.table-price__card-title {
			font-size: 18px;
			color: var(--white-text);
			font-weight: 700;
		}
		.table-price_card-k {
		}
	}
}
</style>
