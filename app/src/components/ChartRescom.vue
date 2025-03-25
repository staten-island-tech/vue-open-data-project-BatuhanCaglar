<script setup>

import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'


Chart.register(...registerables)

const chartRef = ref(null)
let chartInstance = null

const commercial = ref([])
const residential = ref([])

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

    commercial.value = data.filter(item => item.residential_commercial_ind === 'Commercial')
    residential.value = data.filter(item => item.residential_commercial_ind === 'Residential')

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
      labels: ['Commercial', 'Residential'],
      datasets: [{
        label: 'Eviction Data',
        data: [commercial.value.length, residential.value.length], 
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

watch([commercial, residential], createChart)

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