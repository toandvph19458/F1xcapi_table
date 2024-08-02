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
                            <th>Tên HĐ</th>
                            <th class="text-right">OI</th>
                            <th class="text-right">KL</th>
                            <th class="text-center" colspan="2">CHÀO MUA</th>
                            <th class="text-center bg-higlight" colspan="3">KHỚP LỆNH</th>
                            <th class="text-center" colspan="2">CHÀO BÁN</th>
                            <th class="text-center">Thanh toán</th>
                            <th class="text-center">Mở cửa</th>
                            <th class="text-center">Cao nhất</th>
                            <th class="text-center">Thấp nhất</th>
                            <th class="text-center">Ngày thông báo</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="text-center"></th>
                            <th class="text-center"></th>
                            <th class="text-center"></th>
                            <th class="text-right">Giá</th>
                            <th class="text-right">KL</th>
                            <th class="text-right">Giá</th>
                            <th class="text-right">KL</th>
                            <th class="text-right">+/-</th>
                            <th class="text-right">Giá</th>
                            <th class="text-right">KL</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="">
                        <tr>
                            <td colspan="16">DẦU ĐẬU TƯƠNG</td>
                        </tr>
                        <tr>
                            <td>ZLEQ24*</td>
                            <td>Dầu đậu tương 10/24</td>
                            <td class="text-right text-success">71.01</td>
                            <td class="text-right text-success">+0.06%</td>
                            <td class="text-center text-success">Mua mạnh</td>
                            <td class="text-center text-danger">Bán mạnh</td>
                            <td class="text-center text-danger">Bán</td>
                            <td class="text-center text-success">Mua mạnh</td>
                            <td class="text-center text-success">Mua mạnh</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
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
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
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
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
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
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                            <td class="text-center text-success">Mua</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="chart__right">
                <Bar :data="chartData" :options="chartOptions"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import TableHeader from "../../components/table-price/table-header.vue";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default defineComponent({
    name: "tabel-2",
    components: {
        TableHeader,
        Bar
    },
   
    setup(props, ctx) { 
        const chartData = ref({
            labels: ['January', 'February', 'March'],
            datasets: [{ data: [40, 20, 12] }]
        });

        const chartOptions = ref({
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        });
        return {
            chartData,
            chartOptions
        }
    },
});
</script>

<style scoped lang="scss">
.wrapper {
    background-color: #090618;

    .table> :not(caption)>*>* {
        background-color: #181336 !important;
    }

    .tabel__inner {
        max-width: 1760px;
        margin: 0 auto;
        display: flex;
        gap: 24px;
        table{
            width: 100%;
        }
        .table-bordered {
                thead {
                    tr {
                        th {
                            border: 1px solid #1C163F;
                        }
                    }
                }

                tbody {
                    tr {
                        td {
                            border: 1px solid #1C163F;
                        }
                    }
                }
            }

            .table__price .table-dark {
                background-color: #181336 !important;
                border-radius: 12px !important;
                margin-bottom: 0;
            }

            .table__price .table-dark.table-striped tbody tr:nth-of-type(odd) {
                background-color: #1c163f !important;
            }

            .table__price .table-dark.table-striped thead tr th {
                border-top: none;
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
                border-radius: 12px 0;
            }

            .table__price .table-dark.table-striped tbody tr td:first-child {
                border-left: none !important;
            }

            .table__price .table-dark.table-striped thead tr th:last-child {
                border-right: none !important;
                border-radius: 0px 12px;
            }

            .table__price .table-dark.table-striped tbody tr td:last-child {
                border-right: none !important;
            }

            .table__price .table-dark .table-striped tbody tr:last-child>td:first-child {
                border-radius: 12px;
            }
    }
}
</style>
