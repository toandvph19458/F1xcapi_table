<template>
    <div class="card__wrapper">
        <div class="card__progress">
            <div class="progress__title">
                    <h5>Nông sản</h5>
            </div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100">
                <div class="progress-bar bg-success" style="width: 25%"></div>
                <div class="progress-bar bg-danger" style="width: 75%"></div>
            </div>
            <div class="progress__precent">
                <p>25%</p>
                <p>75%</p>
            </div>
        </div>
        <div class="card__chart">
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

function getRandomData(length:number) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
}



export default defineComponent({
    name: "card",
    components: {
        Bar
    },
    setup(props, ctx) {
        const chartData = ref<any>({
            labels: Array.from({ length: 15 }, (_, i) => (i + 1).toString()),
            datasets: [
                {
                    type: 'line',
                    label: 'Line Dataset',
                    borderColor: 'rgb(75, 192, 192)',
                    pointRadius: 0, 
                    borderWidth: 2,
                    data: getRandomData(15),
                    fill: false
                },
                {
                    type: 'bar',
                    label: 'Bar Dataset',
                    data: [1,2,3,4,5,6,5,6,2,1,4,1,1,2,3],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 1
                }
            ]
        });

        const chartOptions = ref({
            responsive: true,
            scales: {
                x: {
                    display: false // Ẩn nhãn trên trục x
                },
                y: {
                    display: false, // Ẩn nhãn trên trục y
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false // Ẩn nhãn của biểu đồ
                }
            }
        });

        return {
            chartData,
            chartOptions
        };
    },
});
</script>

<style lang="scss">
.card__wrapper {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 12px;
    .card__progress{
        .progress__title{
            h5{
                margin-bottom: 12px;
                color: #FFF !important;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: 16px; /* 114.286% */
            }
        }
        .progress{
            display: flex;
            width: 160px;
            background-color: transparent;
            margin-bottom: 20px;
            height: 20px !important;
            .progress-bar {
                border-radius: 6px;
            }
            .bg-success{
                background-color:#2FEB42 !important ;
            }
            .bg-danger{
                background-color: #FF2626 !important;
            }
        }
        .progress__precent{
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                color: #FFF;
                font-size: 10px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
    }
}
</style>
