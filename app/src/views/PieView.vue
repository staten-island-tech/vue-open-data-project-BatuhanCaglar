<template>
    <div>
      <h1>Eviction or Possession Chart</h1>      
      <button @click="$router.push('/')">Back to Home</button>
      <ChartPie />
    </div>
  </template>
  
  <script setup>
  import ChartPie from '@/components/ChartPie.vue';
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