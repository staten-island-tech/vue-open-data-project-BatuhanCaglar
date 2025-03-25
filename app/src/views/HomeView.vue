<template>
  <div class="container">
    <h1>Evictions Extravaganza</h1>
    <div class="button-container">

      <router-link to="/chart">
        <button>View Borough Graph</button>
      </router-link>

      <router-link to="/pie">
        <button>View Eviction or Possession Chart</button>
      </router-link>

      <router-link to="/marshal">
        <button>View Marshal Chart</button>
      </router-link>

      <router-link to="/rescom">
        <button>View Residential or Commercial Chart</button>
      </router-link>
    </div>

    <h2>Eviction Records</h2>
    <div class="card-container">
      <EvictionCard v-for="(eviction, index) in evictions" :key="index" :eviction="eviction" />
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import EvictionCard from '../components/EvictionCard.vue';

const evictions = ref([]);

const fetchEvictions = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/6z8x-wfk4.json');
    evictions.value = await response.json();
  } catch (error) {
    console.error('Error fetching eviction data:', error);
  }
};

onMounted(fetchEvictions);

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  display: flex;
  flex-direction: column;
}

h1 {
  margin-bottom: 20px;
}


button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

}

button:hover {
  background-color: darkblue;
}

h2 {
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 80vw;
  max-width: 1200px;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

</style>