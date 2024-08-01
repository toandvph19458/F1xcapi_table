<template>
	<div class="wrapper">
		<!--@@@ table header  -->
		<table-header />
		<div class="tabel__inner">
			<div class="table__price">
				<table class="table table-dark table-striped table-hover table-bordered">
					<thead>
						<tr>
							<th>Mã HĐ</th>
							<th>Tên đầy đủ</th>
							<th class="text-right">Giá</th>
							<th class="text-right">%</th>
							<th class="text-center">MA</th>
							<th class="text-center">RSI</th>
							<th class="text-center">MACD</th>
							<th class="text-center">BOLLINGER</th>
							<th class="text-center">CCI</th>
							<th class="text-center">Tổng quan</th>
						</tr>
					</thead>
					<tbody class="">
						<tr>
							<td>ZLEQ24</td>
							<td>Dầu đậu tương 10/24</td>
							<td class="text-right text-success">71.01</td>
							<td class="text-right text-success">+0.06%</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-danger">Bán mạnh</td>
							<td class="text-center text-danger">Bán</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua</td>
						</tr>
						<tr>
							<td>ZLEQ24</td>
							<td>Dầu đậu tương 10/24</td>
							<td class="text-right text-success">71.01</td>
							<td class="text-right text-success">+0.06%</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-danger">Bán mạnh</td>
							<td class="text-center text-danger">Bán</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua</td>
						</tr>
						<tr>
							<td>ZLEQ24</td>
							<td>Dầu đậu tương 10/24</td>
							<td class="text-right text-success">1,062.966</td>
							<td class="text-right text-danger">-1.48%</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-danger">Bán mạnh</td>
							<td class="text-center text-danger">Bán</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua</td>
						</tr>
						<tr>
							<td>ZLEQ24</td>
							<td>Dầu đậu tương 10/24</td>
							<td class="text-right text-success">1,432.373</td>
							<td class="text-right text-warning">0.06%</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-danger">Bán mạnh</td>
							<td class="text-center text-danger">Bán</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua mạnh</td>
							<td class="text-center text-success">Mua</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableHeader from "../../components/table-price/table-header.vue";

export default defineComponent({
	name: "tabel-3",
	components: {
		TableHeader,
	},
	setup(props, ctx) {},
});
</script>

<style scoped lang="scss">
.wrapper {
	background-color: #090618;

	.tabel__inner {
		max-width: 1760px;
		margin: 0 auto;
	}

	.table__price .table-dark {
		background-color: #181336 !important;
		border-radius: 12px;
		margin-bottom: 0;
	}

	.table__price .table-dark.table-striped tbody tr:nth-of-type(odd) {
		background-color: #1c163f !important;
	}

	.table__price .table-dark.table-striped thead tr th {
		border-top: none;
		border-bottom: none;
		font-size: 12px;
		font-weight: 600;
		line-height: 16px;
	}

	.table__price .table-dark.table-striped tbody tr td {
		border-bottom: none;
	}

	.table__price .table-dark.table-striped tbody tr td {
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
	}

	.table__price .table-dark.table-striped thead tr th:first-child {
		border-left: none !important;
	}

	.table__price .table-dark.table-striped tbody tr td:first-child {
		border-left: none !important;
	}

	.table__price .table-dark.table-striped thead tr th:last-child {
		border-right: none !important;
	}

	.table__price .table-dark.table-striped tbody tr td:last-child {
		border-right: none !important;
	}
}
</style>
