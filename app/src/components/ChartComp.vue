<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import { onBeforeUnmount } from 'vue'
import { store } from '../assets/store'
const bkevicts = ref()

Chart.register(...registerables)

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
  if (chartRef.value) {
    chartInstance = new Chart(chartRef.value, {
      type: 'bar', // Change this to 'line', 'pie', etc.
      data: {
        labels: ['Brooklyn', 'Bronx', 'Staten Island', 'Manhattan', 'Quuens'],
        datasets: [
          {
            label: 'Sales',
            data: [10, 20, 30, 40, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px;
}
</style>
