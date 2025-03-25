<template>
    <div>
      <h1>Eviction Chart</h1>
      <ChartComp />
      <button @click="$router.push('/')">Back to Home</button>
    </div>
  </template>
  
  <script setup>
  import ChartComp from '../components/ChartComp.vue'
  </script>
  
  <style scoped>
  button {
    margin-top: 20px;
    padding: 10px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>