<template>
  <div class="container">
    <h1>Evictions Extravaganza</h1>
    <div class="card-container">
      <EvictionCard v-for="(eviction, index) in evictions" :key="index" :eviction="eviction" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EvictionCard from '../components/EvictionCard.vue'
const evictions = ref([])

const bkevicts = ref([])
const bxevicts = ref([])
const sievicts = ref([])
const quevicts = ref([])
const mhevicts = ref([])

function filterEvicts(evicts) {
  evicts.forEach((element) => {
    if (element.borough == 'BROOKLYN') {
      bkevicts.value.push(element)
    }
    if (element.borough == 'BRONX') {
      bxevicts.value.push(element)
    }
    if (element.borough == 'STATEN ISLAND') {
      sievicts.value.push(element)
    }
    if (element.borough == 'QUEENS') {
      quevicts.value.push(element)
    }
    if (element.borough == 'MANHATTAN') {
      mhevicts.value.push(element)
    }
  })
}

async function fetchEvictions() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/6z8x-wfk4.json')
    evictions.value = await response.json()
    filterEvicts(evictions.value)
  } catch (error) {
    console.error('Error fetching eviction data:', error)
  }
}

onMounted(fetchEvictions)
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
