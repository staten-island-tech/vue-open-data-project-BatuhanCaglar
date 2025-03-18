<script setup>
import { ref, onMounted, computed } from 'vue'
import { Chart, registerables } from 'chart.js'
import { onBeforeUnmount } from 'vue'

const props = defineProps({
  bkArray: Array,
  bxArray: Array,
  siArray: Array,
  qnsArray: Array,
  mhArray: Array,
})

const bkLength = computed(() => props.bkArray.length)
const bxLength = computed(() => props.bxArray.length)
const siLength = computed(() => props.siArray.length)
const qnsLength = computed(() => props.qnsArray.length)
const mhLength = computed(() => props.mhArray.length)

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
            data: [bkLength, bxLength, siLength, qnsLength, mhLength],
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
