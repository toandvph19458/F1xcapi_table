<template>
	<div class="wrapper">
		<!--@@@ table header  -->
		<table-header />

		<div class="table-price">
			<div class="table-price__list">
				<div v-for="k in 4" :key="k" class="table-price__card">
					<div class="table-price__card-header">
						<div class="table-price_card-box">
							<img class="table-price__card-icon" src="../../assets/img/icon/Illus.png" />
							<h4 class="table-price__card-title">NÔNG SẢN</h4>
						</div>

						<div class="table-price_card-k">
							<Select v-model="selectedCity" :options="cities" optionLabel="name"
								placeholder="Select a City" class="table-price_card-select" />
						</div>
					</div>

					<div class="table-price__card-body">
						<table class="table table-dark table-striped table-hover table-bordered">
							<thead>
								<tr>
									<th>Mã</th>
									<th>Tên sản phẩm</th>
									<th class="text-right">Giá giao dịch</th>
									<th class="text-right">%</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="i in 10" :key="i" :class="{ active: i % 2 == 0 }">
									<td>ZLEQ24</td>
									<td>Dầu đậu tương 10/24</td>
									<td class="text-right text-success">71.01</td>
									<td class="text-right text-success">+0.06%</td>
								</tr>
							</tbody>
						</table>
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
			gap: 12px;
			grid-template-columns: repeat(4, 1fr);

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
				padding: 0 12px;
			}
		}

		.table-price__card {
			background: #100c26;
			border-radius: 16px;
			overflow: hidden;
			padding-bottom: 24px;
		}

		.table-price__card-header {
			padding: 24px 24px 0 24px;
			display: flex;
			gap: 12px;
			align-items: center;
			justify-content: space-between;
		}

		.table-price_card-box {
			display: flex;
			gap: 12px;
			align-items: center;
		}

		.table-price__card-icon {
			width: 40px;
			height: 40px;
		}

		.table-price__card-title {
			font-size: 18px;
			color: var(--white-text);
			font-weight: 700;
		}

		.table-price_card-k {}

		.table-price_card-select {
			padding: 4px 8px;
			font-size: 14px;

			border: 1px solid #1c163f;
			background-color: transparent !important;

			&.p-focus {
				border: 1px solid #1c163f;
			}

			svg {
				width: 12px !important;
				height: 12px !important;
			}

			span {
				color: var(--white-text);
			}
		}

		.table-price__card-body {
			margin-top: 12px;

			.table-dark {
				margin-bottom: 0;
			}

			.table-dark.table-striped thead tr th {
				border-top: none;
				border-bottom: none;
				font-size: 12px;
				font-weight: 500;
				padding: 12px 16px;
				color: #7a71ad;
				background-color: #100c26;
			}

			.table-striped>tbody>tr:nth-of-type(odd) {
				background-color: #100c26 !important;
			}

			.table-dark.table-striped tbody tr td {
				border-bottom: none;
			}

			.table-dark.table-striped tbody tr td {
				font-size: 12px;
				font-weight: 500;
				padding: 12px 16px;
				background-color: transparent !important;
			}

			.table-dark.table-striped tbody tr.active td {
				color: #7a71ad;
				background-color: #100c26;
			}

			.table-dark.table-striped thead tr th:first-child {
				border-left: none !important;
			}

			.table-dark.table-striped tbody tr td:first-child {
				border-left: none !important;
			}

			.table-dark.table-striped thead tr th:last-child {
				border-right: none !important;
			}

			.table-dark.table-striped tbody tr td:last-child {
				border-right: none !important;
			}
		}
	}
}
</style>
