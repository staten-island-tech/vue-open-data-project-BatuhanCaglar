<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartRef = ref(null)
let chartInstance = null

const evictions = ref([])
const bkevicts = ref([])
const bxevicts = ref([])
const sievicts = ref([])
const quevicts = ref([])
const mhevicts = ref([])

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

    evictions.value = data
    bkevicts.value = data.filter(item => item.borough === 'BROOKLYN')
    bxevicts.value = data.filter(item => item.borough === 'BRONX')
    sievicts.value = data.filter(item => item.borough === 'STATEN ISLAND')
    quevicts.value = data.filter(item => item.borough === 'QUEENS')
    mhevicts.value = data.filter(item => item.borough === 'MANHATTAN')

  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const createChart = () => {
  if (chartInstance) chartInstance.destroy()

  chartInstance = new Chart(chartRef.value, {
    type: 'bar',
    data: {
      labels: ['Brooklyn', 'Bronx', 'Staten Island', 'Queens', 'Manhattan'],
      datasets: [
        {
          label: 'Evictions',
          data: [
            bkevicts.value.length,
            bxevicts.value.length,
            sievicts.value.length,
            quevicts.value.length,
            mhevicts.value.length,
          ],
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

onMounted(async () => {
  await fetchData()
  createChart()
})

watch([bkevicts, bxevicts, sievicts, quevicts, mhevicts], createChart)

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
