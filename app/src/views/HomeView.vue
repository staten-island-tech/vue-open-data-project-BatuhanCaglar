<template>
  <div class="container">
    <h1>Evictions Extravaganza</h1>
    <router-link to="/chart">
      <button>View Bar Graph</button>
    </router-link>
    <router-link to="/pie">
      <button>View Pie Chart</button>
    </router-link>
    <router-link to="/marshal">
      <button>View Marshal Chart</button>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
button {
  margin-top: 20px;
  padding: 10px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
}
</style>