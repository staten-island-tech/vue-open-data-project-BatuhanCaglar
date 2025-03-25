<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartRef = ref(null)
let chartInstance = null

const possession = ref([])
const evictions = ref([])

const fetchData = async () => {
  try {
    console.log("Fetching data...")  
    const response = await fetch('https://data.cityofnewyork.us/resource/6z8x-wfk4.json')
    const data = await response.json()
    
    console.log("API Data:", data) 

    if (!Array.isArray(data)) {
      console.error("API response is not an array:", data)
      return
    }

    possession.value = data.filter(item => item.eviction_possession === 'Possession')
    evictions.value = data.filter(item => item.eviction_possession === 'Eviction')

  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy() 
  }

  const ctx = chartRef.value.getContext('2d')

  chartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Possession', 'Evictions'],
      datasets: [{
        label: 'Eviction Data',
        data: [possession.value.length, evictions.value.length], 
        backgroundColor: [
          'rgb(54, 162, 235)', 
          'rgb(255, 99, 132)' 
        ],
        hoverOffset: 4
      }]
    }
  })
}

onMounted(async () => {
  await fetchData()
  createChart()
})

watch([possession, evictions], createChart)
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