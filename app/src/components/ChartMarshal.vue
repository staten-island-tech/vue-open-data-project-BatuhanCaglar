<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartRef = ref(null)
let chartInstance = null

const marshalCounts = ref({})

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

    const counts = {}
    data.forEach(item => {
      if (item.marshal_last_name) {
        counts[item.marshal_last_name] = (counts[item.marshal_last_name] || 0) + 1
      }
    })

    marshalCounts.value = counts

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
    type: 'polarArea',
    data: {
      labels: Object.keys(marshalCounts.value), 
      datasets: [{
        label: 'Evictions by Marshal',
        data: Object.values(marshalCounts.value), 
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(123, 239, 178)'
        ],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: {
          position: 'right',
          labels: {
            font: {
              size: 18 
            }
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            font: {
              size: 20 
            }
          },
          ticks: {
            font: {
              size: 18 
            }
          }
        }
      }
    }
  })
}

onMounted(async () => {
  await fetchData()
  createChart()
})

watch(marshalCounts, createChart)
</script>

<template>
  <div class="chart-wrapper">
    <div class="chart-container">
      <canvas ref="chartRef"></canvas>
    </div>
  </div>
</template>

<style scoped>
.chart-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.chart-container {
  width: 1200px; 
  height: 800px; 
}
</style>
