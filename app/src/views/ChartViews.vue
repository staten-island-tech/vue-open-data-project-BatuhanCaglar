<script setup>
import { ref, computed, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import { evictionData } from '../data/evictionData'

Chart.register(...registerables)

const chartRef = ref(null)
let chartInstance = null

const bkLength = computed(() => evictionData.bkevicts.length)
const bxLength = computed(() => evictionData.bxevicts.length)
const siLength = computed(() => evictionData.sievicts.length)
const qnsLength = computed(() => evictionData.quevicts.length)
const mhLength = computed(() => evictionData.mhevicts.length)

onMounted(() => {
  if (chartRef.value) {
    chartInstance = new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels: ['Brooklyn', 'Bronx', 'Staten Island', 'Manhattan', 'Queens'],
        datasets: [
          {
            label: 'Evictions',
            data: [bkLength.value, bxLength.value, siLength.value, qnsLength.value, mhLength.value],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
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
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>
